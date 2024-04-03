const APIKEY = `43214616-0b36a50962c68ac8ab7f41267`;
const BASEURL = `https://pixabay.com/api/`;
const MYCACHEKEY = "yourKeysGoesHere";

const urlStateEnum = {
  saved: "saved",
  search: "search",
};

let resultSearchContainer = null;
let keywordLabel = null;
let savedImagesList = [];

let cacheRef = null;

function init() {
  resultSearchContainer = document.getElementById("results");
  keywordLabel = document.getElementById("keyword");
  addListeners();
  openCache();
  //anything else you need right away will go here
}

function addListeners() {
  //fetch and display searched imgs
  window.addEventListener("popstate", popState);
  document.getElementById("btnRunSearch").addEventListener("click", runSearch);
  //handle user picking an image
  document
    .getElementById("btnSaved")
    .addEventListener("click", showSavedImages);
  document.getElementById("results").addEventListener("click", showPickedImage);
}

async function openCache() {
  cacheRef = await caches.open(MYCACHEKEY);
}

async function addItemsCache() {}

function popState() {
  let popstateSelector = "";
  let popstateInputValue = "";

  if (location.hash) {
    let urlSplit = location.hash.split("/");
    [popstateSelector, popstateInputValue] = urlSplit;
    keywordLabel.value = popstateInputValue;
    runSearch();
  } else {
    cleanSeachResult();
  }
}

function updateHistory(urlState, keyValue) {
  switch (urlState) {
    case urlStateEnum.search:
      history.pushState({}, "", `#search/${keyValue}`);
      break;
    case urlStateEnum.saved:
      history.pushState({}, "", `#saved`);
      break;
  }
}

function runSearch() {
  // ev.preventDefault();
  let keyword = document.getElementById("keyword").value;
  let url = new URL(BASEURL);
  url.searchParams.append(`key`, APIKEY);
  url.searchParams.append(`image_type`, `photo`);
  url.searchParams.append(`orientation`, `horizontal`);
  url.searchParams.append(`category`, `people`);
  url.searchParams.append(`order`, `popular`);
  url.searchParams.append(`per_page`, `30`);
  url.searchParams.append(`q`, keyword); //search query
  fetch(url)
    .then((response) => {
      if (!response.ok) throw new Error("Fetch error", response.statusText);
      return response.json();
    })
    .then((data) => {
      console.log(data);
      displaySearchResults(data);
      updateHistory(urlStateEnum.search, keyword);
    })
    .catch((err) => {
      console.log(err.message);
    });
}

function cleanSeachResult() {
  keywordLabel.value = "";
  resultSearchContainer.innerHTML = ``;
}

function displaySearchResults(data) {
  resultSearchContainer.className = "search-results";

  // Create a document fragment to store the generated HTML
  let fragment = document.createDocumentFragment();

  if (data.hits.length === 0) {
    resultSearchContainer.innerHTML = "<h2>No Search Results.</h2>";
    return;
  }

  // Iterate through the data.hits array and generate HTML for each result
  data.hits.forEach(
    ({ previewURL, id, tags, previewWidth, previewHeight, largeImageURL }) => {
      let div = document.createElement("div");
      div.classList.add("card");
      div.setAttribute("data-ref", id);
      div.setAttribute("data-full", largeImageURL);

      let img = document.createElement("img");
      img.src = previewURL;
      img.alt = `${tags} photo`;
      img.width = previewWidth;
      img.height = previewHeight;

      div.appendChild(img);
      fragment.appendChild(div);
    }
  );

  // Clear the existing content and append the document fragment
  resultSearchContainer.innerHTML = "";
  resultSearchContainer.appendChild(fragment);
}

async function showPickedImage(ev) {
  // Check if the clicked element is an image or its parent container
  const clickedElement = ev.target;
  const clickedDiv = clickedElement.closest(".card");

  // If the clicked element is a div containing an image
  if (clickedDiv) {
    const fullImageURL = clickedDiv.getAttribute("data-full");
    await imgDataUrlToBlob(fullImageURL);
    // Perform whatever action you want with the full image URL
  }
}

async function showSavedImages() {
  updateHistory(urlStateEnum.saved);
  resultSearchContainer.innerHTML = ``;
  let fragment = document.createDocumentFragment();
  try {
    const keys = await cacheRef.keys();
    // Extract URLs from keys
    keys.forEach(async (request) => {
      let div = document.createElement("div");
      div.classList.add("card");
      let img = document.createElement("img");
      img.src = request.url;
      img.alt = `photo`;
      img.classList.add("saved-image");

      div.appendChild(img);
      console.log(div);
      fragment.appendChild(div);
    });
    resultSearchContainer.appendChild(fragment);
  } catch (err) {
    console.error("Error retrieving cache keys:", err);
  }
}


async function imgDataUrlToBlob(fullData) {
  try {
    const response = await fetch(fullData);
    if (!response.ok) {
      throw new Error("Invalid Response");
    }
    const blobResponse = await response.blob();
    await cacheRef.put(fullData, new Response(blobResponse));
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener("DOMContentLoaded", init);

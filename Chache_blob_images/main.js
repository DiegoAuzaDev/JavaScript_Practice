const APIKEY = `43214616-0b36a50962c68ac8ab7f41267`;
const BASEURL = `https://pixabay.com/api/`;

const urlStateEnum = {
  saved: "saved",
  search: "search",
};

let savedImagesBlob = null;

function init() {
  addListeners();
  //anything else you need right away will go here
}

function addListeners() {
  //fetch and display searched imgs
  window.addEventListener("popstate", popState);
  document.getElementById("btnRunSearch").addEventListener("click", runSearch);
  //handle user picking an image
  document.getElementById("results").addEventListener("click", showPickedImage);
}

function popState() {
  let popstateSelector = "";
  let popstateInputValue = "";

  if (location.hash) {
    let urlSplit = location.hash.split("/");
    [popstateSelector, popstateInputValue] = urlSplit;
    let keyword = document.getElementById("keyword");
    keyword.value = popstateInputValue;
  }
}

function updateHistory(urlState, keyValue) {
  switch (urlState) {
    case urlStateEnum.search:
      history.pushState({}, "", `#search/${keyValue}`);
      break;
    case urlStateEnum.search:
      history.pushState({}, "", `#saved`);
      break;
  }
}

function handleState() {}

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

function displaySearchResults(data) {
  let results = document.querySelector("#results");
  results.className = "search-results";

  // Create a document fragment to store the generated HTML
  let fragment = document.createDocumentFragment();

  if (data.hits.length === 0) {
    results.innerHTML = "<h2>No Search Results.</h2>";
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
  results.innerHTML = "";
  results.appendChild(fragment);
}

function showPickedImage() {
  //once user click on an image handle here
}

window.addEventListener("DOMContentLoaded", init);

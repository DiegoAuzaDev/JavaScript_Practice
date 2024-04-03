window.addEventListener("DOMContentLoaded", init);
// document.getElementById("searchForm").addEventListener("submit", init)
let buttonEl=document.getElementById("fetch");
let resultEl=document.getElementById("result")
let inputEl=document.getElementById("inp")

let key='3CdCehXE_yvm0lsftPspK8TTs37fjEOqi6tUIkxO0AI';
let url=`https://api.unsplash.com/search/photos/?client_id=${key}`




function init(){
    buttonEl.addEventListener("click", fetchImage)

}

function fetchImage(ev){
    ev.preventDefault();
    let query=inputEl.value.trim()
    console.log(query)
    fetch(url+`&query=${query}`)
        .then((res)=>{
            if (!res.ok){
                throw new Error ("invalid");
            }
            return res.json()
        })
        .then((data)=>{
            displayImages(data.results)
        })
        .catch((err)=> console.log(err))
}


function displayImages(data) {
  resultEl.innerHTML = "";
  let docFragment = new DocumentFragment();

  data.forEach((item) => {
    fetch(item.urls.raw)
      .then((res) => {
        if (!res.ok) {
          throw new Error("invalid");
        }
        return res.blob();
      })
      .then((data) => {
        let itemElement =  createImageElement(data);
        return itemElement
    }).then((item)=>{
          docFragment.appendChild(item);

      })
      .catch((err) => console.log(err));
  });

  resultEl.appendChild(docFragment);
}

function createImageElement(data) {
  const url = URL.createObjectURL(data);
  const imgEl = document.createElement("img");
  imgEl.src = url;
  imgEl.alt = `Image of: ${inputEl.value}`;
  return imgEl;
}

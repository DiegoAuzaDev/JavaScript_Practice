function init() {
  const imgLink = "https://picsum.photos/200/300";

  fetch("https://picsum.photos/200/300").then((response) => {
    if (!response.ok) {
      throw new Error("Error getting the image");
    }
    return response.blob()
  }).then(data=>{
    console.log(data)
  })
  .catch((err)=>{
    console.log(err)
  })
}

document.addEventListener("DOMContentLoaded", init);

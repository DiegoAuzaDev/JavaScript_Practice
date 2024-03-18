function init() {
  const imgLink = "https://picsum.photos/200/300";

  fetch("https://picsum.photos/200/300").then((response) => {
    if (!response.ok) {
      throw new Error("Error getting the image");
    }
    return response.blob()
  }).then(data=>{
    console.log(data)
    console.log(URL.createObjectURL(data))
    let imageUrl = URL.createObjectURL(data)
    displayImage(imageUrl)


  })
  .catch((err)=>{
    console.log(err)
  })
}

function displayImage(imgUrl){

    let myImage = document.createElement("img")
    myImage.setAttribute("src", imgUrl);
    document.querySelector("main").append(myImage)

}

document.addEventListener("DOMContentLoaded", init);

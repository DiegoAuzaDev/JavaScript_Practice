
const marriageProposals = [
  "Will you make me the happiest person alive and marry me?",
  "I can't imagine spending my life with anyone else. Will you marry me?",
  "You are my everything. Will you marry me?",
  "Let's make forever a reality. Will you marry me?",
  "I want to spend the rest of my days making you happy. Will you marry me?",
  "You've stolen my heart. Will you marry me and keep it safe forever?",
  "You're the one I've been searching for. Will you marry me?",
  "I promise to cherish and adore you for eternity. Will you marry me?",
  "My love for you grows stronger every day. Will you marry me and let it flourish forever?",
  "With you, I've found my home. Will you marry me?",
  "I want to wake up next to you every morning. Will you marry me?",
  "You're my soulmate. Will you marry me?",
  "Let's write our love story together. Will you marry me?",
  "I want to spend every moment loving you. Will you marry me?",
  "I want to be with you until the end of time. Will you marry me?",
  "My life began the day I met you. Will you marry me?",
  "You complete me. Will you marry me and make me whole forever?",
  "I can't wait to grow old with you. Will you marry me?",
];
const catImage = [
  "cat1.jpeg",
  "cat2.jpeg",
  "cat3.jpeg",
  "cat4.jpeg",
  "cat5.webp",
  "cat6.jpeg",
];
// get HTMl elements and store them in variables
const yesButton = document.getElementById("yes_button");
const noButton = document.getElementById("no_button");
const text = document.getElementById("text");
const img = document.getElementById("cat_image");
const heart = document.getElementsByClassName("heart");

let count = 2;
let noCount = 2;
let pxCount = 100;
let textCount = 0;
let imageCount = 0;
text.textContent = marriageProposals[textCount];
img.src = `./src/${catImage[imageCount]}`;

yesButton.addEventListener("click", ()=> {
  changeHeartYes();
})

noButton.addEventListener("click", ()=>{
  count = count + 0.09
   noCount = noCount - 0.09;
  getYesButtonBigger();
  getNoButtonSmaller();
  changeTextContent();
  changeImageContent();
  changeHeart();
})
function getNoButtonSmaller (){
  noButton.style.padding = `${noCount}rem`;
  noButton.style.opacity = `${noCount}`;

}
function getYesButtonBigger(){
  yesButton.style.padding = `${count}rem`
}
function changeTextContent(){
  textCount++;
  if(textCount == marriageProposals.length){
    textCount = 0;
    text.textContent = marriageProposals[textCount];
  } else {
   text.textContent = marriageProposals[textCount];
  }
}
function changeImageContent(){
  imageCount ++ 
  pxCount = pxCount + 15
  img.style.height = `${pxCount}px`;
  if(imageCount == catImage.length){
    imageCount = 0
     img.src = `./src/${catImage[imageCount]}`;

  } else {
  img.src = `./src/${catImage[imageCount]}`;
  }
}
function changeHeart(){
  heart[0].src = "./src/heartBreak.webp";
  heart[1].src = "./src/heartBreak.webp";
}
function changeHeartYes(){
    heart[0].src = "./src/heart.webp";
    heart[1].src = "./src/heart.webp";
     img.src = `./src/catYes.png`;
}





// Write a function that accepts a String (a sentence) and a replacement word as 
// arguments. Return the sentence back after replacing the second word with the 
// replacement.
// a. Eg: if “This is a test” and  “****” is sent to the function. Return will be “This 
// "***"" is a test”.

let myOriginalText = "the dog is eating food";
let myReplacement = "#5@&*!";
let myPosition = 1;

stringReplacement(myOriginalText, myReplacement, myPosition);


function stringReplacement(originalText, replacement, position){

    // this line will split the text base on " " : for example: originalText = "This is a new text";
    // return = ["This", "is", "a", "new", "text"]; 
    let textArray = originalText.split(" ");
    // ! check if position is undefined and if it is, we set a default value
    var positionToReplace = position;
    if(position == undefined || position == null){
        positionToReplace = 0
    }   

    // ? Changing text 
    if( positionToReplace < textArray.length){
        textArray[position] = replacement
        let finalText = textArray.join(" ")
        console.log(finalText)
        return;
    }
    //! you can not replace it 
    console.log("You can not replace if there is nothing to replace")

}


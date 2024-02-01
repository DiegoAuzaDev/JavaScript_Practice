/* 

Write a JavaScript function called formatPhoneNumber that takes a phone 
number as an argument and formats it as follows:
   a. The phone number is provided as a string of digits (e.g., "1234567890").
   b. If the phone number has fewer than 10 digits, pad the beginning with 
   zeros to ensure its 10 digits long before formatting.
   c. Format the phone number as "(XXX) XXX-XXXX", where "X" represents 
   each digit of the phone number.
   d. Returned the formatted phone number and print it.
   e. Hint: padStart is a string method so it will work only on string not a 
   number.
   f. For the formatting use slice() on your padded string and add(, ), space, 
   and – in it.

*/


formatPhoneNumber("123412");
formatPhoneNumber("12345678");
formatPhoneNumber("188988");
formatPhoneNumber("1123345564ppp");


formatPhoneNumber("123456789098adfsfs");




// formatPhoneNumber("123456789.9");
// formatPhoneNumber("-123456789.9");
// formatPhoneNumber("adfasf");

function formatPhoneNumber(phoneNuber){



  //! We do not use parseInt because we must ensure that the value passed to the function is a valid number.
  // let thisNaN = parseInt(phoneNuber)

  //? In this case, Number() will return the number, and if it cannot be converted, it will yield NaN (Not a Number)

  let number = Number(phoneNuber);







  let numberLength = null;
  let numberString = null;
  let numberFormat = null;






  // you can use !isNaN, typeof value === 'number'

  if (!isNaN(number)) {



    // no decimal numbers
    number = Math.floor(number);



    // no negative numbers
    number = Math.abs(number);


    numberLength = number.toString().length;


    numberString = `${number}`





    if(numberLength < 10 ){
        numberString = numberString.padStart(10, "0");
    }
    if(numberLength > 10){
        let numberLargeExtra = numberString.length - 10


        numberString = numberString.slice(numberLargeExtra);



    }
    numberFormat = numberString.split("")







    let initialNumberFomat = numberFormat.slice(0, 3);
     initialNumberFomat = initialNumberFomat.join("");
    let firstHalfNumberFormat = numberFormat.slice(3, 6)
      firstHalfNumberFormat = firstHalfNumberFormat.join("");
    let secondHalfNumberFormat = numberFormat.slice(6, -1)
        secondHalfNumberFormat = secondHalfNumberFormat.join("");

    numberFormat = new Set();


    numberFormat.add("(")
    numberFormat.add(initialNumberFomat)
    numberFormat.add(")")
    numberFormat.add(" ")
    numberFormat.add(firstHalfNumberFormat)
    numberFormat.add("-")
    numberFormat.add(secondHalfNumberFormat);
    let finalString = Array.from(numberFormat)
    if(finalString.length < 7){
    finalString.splice(4, 0, "000")
    }

      console.log(finalString.join(""))
    return finalString;


  } else {
    console.log("This is not a number and you must double check the input ");
  }
}
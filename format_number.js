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


formatPhoneNumber("1234");
formatPhoneNumber("123456789098");
// formatPhoneNumber("123456789000");
// formatPhoneNumber("123456fadfaf0");
// formatPhoneNumber("adfasf");

function formatPhoneNumber(phoneNuber){
  //! We do not use parseInt because we must ensure that the value passed to the function is a valid number.
  // let thisNaN = parseInt(phoneNuber)

  //? In this case, Number() will return the number, and if it cannot be converted, it will yield NaN (Not a Number)

  let number = Number(phoneNuber);
  let numberLength = null;
  let numberString = null;

  // you can use !isNaN, typeof value === 'number'

  if (!isNaN(number)) {

    numberLength = number.toString().length;
    numberString = `${number}`

    if(numberLength < 10 ){
        numberString = numberString.padStart(10, "0");
        console.log(numberString)
    }
    if(numberLength > 10){
        let numberLargeExtra = numberString.length - 10
        numberString = numberString.slice(numberLargeExtra);
        console.log(numberString)
    }

  } else {
    console.log("This is not a number and you must double check the input ");
  }
}
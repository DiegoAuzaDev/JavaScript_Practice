// Write a foorlopp that will console.log number from 101 to 41 
// a. Then convert this loop to print only the even number from 101 - 41.

// ! If you want to run this code at test you must take a look at the path you are currently targeting 
// ? How to run this JS file 
// ? paste this command line : node main_loop.js


// ! Here you can change the value of the number but do not change the string values for instructionAll - instructionEven - instructionOdd
let initalValue = 120;  // allow 
let finalValue = 101;   // allow
let instructionAll = "all";  // stop 
let instructionEven = "even"; // stop
let instructionOdd = "odd"; // stop

easyForLoop(initalValue, finalValue, instructionOdd);


function easyForLoop(initalValueLoop, finalValueLoop,instruction ){

    // no number because there is not instruction 
    if(initalValueLoop <= finalValueLoop &&  instruction == undefined){
        console.log(`the final value must be larger than the inital value, inital value : ${initalValueLoop}, final ${finalValueLoop}`)
    } 
    //
    // all number 
    //
    if(initalValueLoop < finalValueLoop && instruction == "all"){
        console.log("------------------ counter all  --------------");
        for(let index = initalValue; index <=  finalValueLoop; index++){
            console.log(`|                    ${index }                       |`);
        }
        console.log("------------------ counter all   -----------------");
    }
    //
    // all number but it is going backwards
    //
    if(initalValueLoop > finalValueLoop && instruction == "all"){
        console.log("------------------  counter all (-) --------------");
        for(let index = initalValueLoop; index >=  finalValueLoop; index--){
            console.log(`|                   -${index }                      |`);
        }
        console.log("------------------ counter all (-) -----------------");
    }
    //
    // all even numbers
    //
    if(initalValueLoop < finalValueLoop && instruction == "even"){
        console.log("------------------   even    --------------");
        for(let index = initalValue; index <=  finalValueLoop; index++){
            if( index % 2 == 0){
                console.log(`|               ${index}                  |`);
            }
        }
        console.log("------------------   even    --------------");
    }
    //
    // all negative even numbers
    //
    if(initalValueLoop > finalValueLoop && instruction == "even"){
        console.log("------------------  counter even (-) --------------");
        for(let index = initalValueLoop; index >=  finalValueLoop; index--){
            if(index % 2 == 0){
                console.log(`|                   -${index }                      |`);
            }
        }
        console.log("------------------ counter even (-) -----------------");
    }
    //
    // all odd numbers
    //
    if(initalValueLoop < finalValueLoop && instruction == "odd"){
        console.log("------------------ odd --------------");
        for(let index = initalValue; index <=  finalValueLoop; index++){
            if( index % 2 != 0){
                console.log(`|               ${index}                  |`);
            }
        }
        console.log("------------------ odd  --------------");
    }
    //
    // 
    // 
    if(initalValueLoop > finalValueLoop && instruction == "odd"){
        console.log("------------------  counter odd (-) --------------");
        for(let index = initalValueLoop; index >=  finalValueLoop; index--){
            if(index % 2 != 0){
                console.log(`|                   -${index }                      |`);
            }
        }
        console.log("------------------ counter odd (-) -----------------");
    }

}

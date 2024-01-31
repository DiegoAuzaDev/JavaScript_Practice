// Write a foorlopp that will console.log number from 101 to 41 
// a. Then convert this loop to print only the even number from 101 - 41.

let initalValue = 41;
let finalValue = 101;
let instructionAll = "all";
let instructionEven = "even";
let instructionOdd = "odd";


function easyForLoop(initalValueLoop, finalValueLoop,instruction ){

    //
    if(initalValueLoop <= finalValueLoop){
        console.log(`the final value must be larger than the inital value, inital value : ${initalValueLoop}, final ${finalValueLoop}`)
    } 
    //
    //
    //
    if(initalValueLoop < finalValueLoop && instruction == "all"){
        console.log("------------------ counter all --------------");
        for(let index = initalValue; index <=  finalValueLoop; index++){
             console.log(`|                   ${index }                      |`);
        }
        console.log("------------------ counter all -----------------");
    }
    //
    //
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
    //
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

}

easyForLoop(initalValue, finalValue, instructionOdd);
/*

let shoppingList = [
    {name: 'Milk', price: 4.99},
    {name: 'Apples', price: 2.99},
    {name: 'Eggs', price: 3.99},
] Imagine these are the things in someone’s cart. Create a function, which will iterate
over the list and provide the total due to the customer.

*/

// first we need to loop the shoppingList Array and then sum the prices of each item on the list and return (log) the result 

let shoppingList = [
  { name: "Milk", price: 4.99 },
  { name: "Apples", price: 2.99 },
  { name: "Eggs", price: 3.99 },
];

getPricesLIst(shoppingList)

function getPricesLIst(myList){

    let finalPrice = 0
    let itemNames = ""
    
    for (let i = 0; i < myList.length; i++) {
      finalPrice =  finalPrice + myList[i]["price"]
      itemNames = itemNames + ` ${myList[i]["name"]}`;
    }
    console.log(finalPrice)
    console.log( "+ ------------------------------ YOUR LIST ---------------------------------------+")
    console.log("")
    console.log( "| You are about to pay the following list of items    ," + itemNames + "," + " +")
    console.log( "| You are about to pay the total of  " + finalPrice + " +")
        console.log("");
    console.log( "+ ------------------------------ YOUR LIST ---------------------------------------+");
}


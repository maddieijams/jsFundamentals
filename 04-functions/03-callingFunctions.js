function hi(){
    console.log("HI");
    return "Hey";
}

// hi; //no
// hi(); //yes

console.log(hi); //shows there is a function
console.log(hi()); //running the function

//challenge: create a function that when invoked lists out the numbers from 1to10

function oneToTen() {
    for (var x = 1; x <= 10; x++) {
    console.log(x);
    }
}
oneToTen();
console.log(oneToTen());

//create a function that lists out the values of the array individually
let arr = ['This', 'is', 'really', 'cool?'];

function list() {
    for (item of arr) {
    console.log(item)
    }
}

list();
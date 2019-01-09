//nickname: fat arrow functions

// function coffee() {
//     console.log("coffee is life")
// }

let coffee = ( ) => { //same as writing function
    console.log("Coffee is cool")
}

coffee();


var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`);
}

cats(1, 35);

let fatArrows = (x) => {console.log(x);} //concise body

fatArrows("This is a function, nothing to see");

let namingMachine = (fname, lname) => (fname, lname);

console.log(namingMachine("Tom", "Hiddleston"));



//for statement loops
//easy way to loop through something repeatedly

for ( var i = 1/*variable/index section*/; i <= 10/*conditional section*/;i++/*increment section*/){
    console.log("Number:", i);
}

//Practice
for(var i = 0; i <= 50; i+=5){
    console.log(i);
}

for (var i = 20; i > 1; i--){
    console.log(i);
}

//write a for loop that starts at 3, and increments by 5, but doesnt go over 30
for(var i=3;i<30;i+=5){
    console.log(i)
}

for (var i = 0; i < 10; i++) {
console.log(i)
}

for (var i = 0; i <= 20; i += 2) {
    console.log(i)
}

for (var i = 10; i >= 0; i--) {
    console.log(i)
}

for (var i = 0; i > -25; i -= 2) {
    console.log(i)
}



//for(let name = "Maddie"; name < 7; )

// var str = "name";

// for (var i = 0; i < str.length; i++) {
//     console.log(str.charAt(i))
// }

let str = "name";

for (var i = 0; i < str.length; i++){
    console.log(str[i])
}//best way


//make a for loop where you add all numbers from 1 to 50
var sum = 0;

for (var nums=1; nums <= 50; nums++) {
    sum += nums//this continues to add number by number
}
console.log(sum);
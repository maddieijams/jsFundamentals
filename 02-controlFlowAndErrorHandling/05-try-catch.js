function tryCatchDemo(a){
    try {
        var upperCaseWord = a.toUpperCase();
        console.log(upperCaseWord);
    }
    catch(err){
        console.log(err);
    }
}
tryCatchDemo("Hello");
tryCatchDemo(7); //2nd call

// try {
//     Block to try
// }
// catch(err) {
//     If the try block throws an exception, this block handles errors
// }
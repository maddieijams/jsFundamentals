let long = [1,2,3,4,5,6,7,8,9,10]

console.log(long.length) //properties- an existing attribute of data

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple']

console.log(colors.length)

console.log(colors.toString()) //turns it into a string

colors.forEach( f => {console.log(f)} )

//challenge
console.log(colors instanceof Array);
console.log(colors.reverse())
// let x = colors.reverse()
// x.forEach

let arr = ['blue', 'green', 'yellow', 'red', 'orange', 'purple']

if (arr instanceof Array === true) {
    let revArr = arr.reverse()
    revArr.forEach(a => console.log(a))
  }



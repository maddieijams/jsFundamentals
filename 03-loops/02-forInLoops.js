
//enumerable objects

var student = { name: "Harry", awesome: true, degree: "JavaScript", week: 1 };

for (item in student) {
    //console.log(item);
    console.log(student[item])
}

var pieArray = ['cherry','apple','chocolate peanut butter', 'chicken pot'];
for (var pie in pieArray) {
    console.log(pie);
}

// let name = ('maddie');
// for (item in name) {
//     console.log(name.charAt.toUpperCase[0]);
// }

var studentName = 'hArRy';
var capName;
for (let n in studentName) {
    if (n == 0) {
        capName = studentName[n].toUpperCase();
    } else {
        capName += studentName[n].toLowerCase();
    }
}
console.log(capName);
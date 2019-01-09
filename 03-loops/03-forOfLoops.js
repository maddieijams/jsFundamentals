var student = { name: "Harry", awesome: true, degree: "JavaScript", week: 1 };

for (item of student) {
    console.log(item);
}
// doesnt work because an object is not iterable, use for-of loops for arrays**

var pieArray = ['cherry','apple','chocolate peanut butter', 'chicken pot'];
for (var pie of pieArray) {
    console.log(pie, 'pie is my favorite');
}
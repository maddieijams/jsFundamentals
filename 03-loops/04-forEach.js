//executes a function for each array element, only for arrays

let pies = ['apple','cherry', 'berry'];

pies.forEach(function(pie, index, pies) {
    console.log(pie, index, pies)
}) 
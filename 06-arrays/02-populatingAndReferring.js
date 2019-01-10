let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hotdog'];

for (f in food) {
    console.log(food[f])
}
//could also use for of

food.push('Pizza');//pushes a new string to the array

food.splice(1, 1, 'Bananas')//look at index of 1, how many do you want to cut? what do you want to insert?
console.log(food)

food.pop();//remove item from the end
console.log(food);
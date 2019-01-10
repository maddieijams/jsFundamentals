let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheesecake', 'Hotdog'];

food.forEach(f => {console.log(f); })

//method- pre built functions that manipulate data for us

food.forEach((food, number) => {console.log(number);
console.log(food)
})

/*
Challenge (Go look at MDN docs to remind you):
Create a list (with an array) of movies
Use .forEach() to list your movies
Add another movie at the end 
And replace one of your existing movies with another one 
*/

let movies = ['scream','raw', 'teeth', 'high tension'];

movies.forEach(m => {console.log(m); }) 

movies.push("the shining");
console.log(movies);

movies.splice(1, 1, "prom night");
console.log(movies);
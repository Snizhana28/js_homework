//Завдання 1.
let userName = prompt('What is your name?');
console.log(`Привіт, ${userName}!`);


//Завдання 2.
let sideLength = prompt('Enter the length of the square side');
if (sideLength && !isNaN(sideLength) && sideLength > 0) {
   let perimeter = sideLength * 4;
   console.log(`The perimeter of the square is ${perimeter}`);
}
else {
   console.log('Invalid input');
}

//Завдання 3.
let radius = prompt('Enter the radius of the circle');
if (radius && !isNaN(radius) && radius > 0) {
   let area = Math.PI * Math.pow(radius, 2);
   console.log(`The area of the circle is ${area}`);
}
else {
   console.log('Invalid input');
}


//Завдання 4.
let distance = prompt('Enter the distance between two cities in kilometers');
let time = prompt('Enter the time you want to get there in hours');
if (distance && time && !isNaN(distance) && !isNaN(time) && time > 0) {
   let speed = distance / time;
   console.log(`You need to move at a speed of ${speed} km/h`);
}
else {
   console.log('Invalid input');
}

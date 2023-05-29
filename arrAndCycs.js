// Given an array consisting of movie names, iterate over the array with the output of the names of each movie to the console
console.log("Movies names: ");
const movies = ["m1", "m2", "m3", "m4", "m5"];
movies.forEach((name) => {
   return console.log(name) 
});
// Given an array of car manufacturers, convert the array to a string and back to an array
const carMan = ["cm1", "cm2", "cm3"]
let carStr = carMan.join(",");
let carArr = carStr.split(",");
// Given an array of the names of your friends, add the words hello to each element of the array
console.log("Friends: ");
const names = ["n1", "n2", "n3"];
names.forEach((name) => {
   return console.log(name + " hello") 
});
// Convert numeric array to Boolean
console.log("Numbers to boolean: ");
const numArr = [1,2,3,4,5];
numArr.forEach((value) => console.log(!!{value}));
// Sort the array [1,6,7,8,3,4,5,6] in descending order
console.log("Desc sort: ");
const arrSrt = [1,6,7,8,3,4,5,6];
console.log(arrSrt.sort((a,b) => b-a));
// Filter array [1,6,7,8,3,4,5,6] by value > 3
console.log("Value > 3: ");
const arrFil = [1,6,7,8,3,4,5,6];
console.log(arrFil.filter((value) => value > 3));
// Write a function that takes two parameters - an array and a number and outputs the index of an array element equal to a number
const arrPar = [1,2,3,4,5];
const numPar = 1;
arrPar.forEach((value, index) => {
    if (value == numPar) {
        return console.log("Index: " + index)
}});
// Implement a loop that will print the number 'a' until it is less than 10
console.log("Less than 10: ");
var numA = 0;
while (numA < 10) {
    console.log(numA);
    numA++;
}
// Implement a loop that prints prime numbers to the console
console.log("Prime numbers: ");
for (let i = 2; i <= 10; i++) {
    let isPrime = true;
    
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
        isPrime = false;
        }
    }
    
    if (isPrime) {
    console.log(i);
    }
};

// Implement a loop that prints odd numbers to the console
console.log("Odd numbers: ");
for (let i = 1; i <= 10; i++) {
    if (i % 2!== 0) {
            console.log(i);
    }
}
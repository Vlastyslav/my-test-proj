//Create a car object, add a color property to it with the value equals 'black'
const car = {
    color: "black"
};
console.log(car.color);
//Change the color property of the car object to 'green'
car.color = "green";
console.log(car.color);
//Add the power property to the car object, which is a function and displays the engine power to the console
car.power = function(a) {
    console.log("Engine Power: " + a);
}
car.power(100);
//Pears and apples are accepted to the warehouse, write a function that returns the result of adding the number of accepted pears and apples
const add = function(pears, apples) {
    return pears + apples;
}
console.log(add(5, 6));
//Your name is saved in the payment terminal, write a function to define the name in the terminal (if you entered your name, then hello + name, if not, then there is no such name)
const payment = function(name) {
    if (name == "your name") {
        console.log("Hello " + name);
    } else {
        console.log("There is no such name");
    }
}
payment("your name");
//Write a function for calculating the type of argument and type output to the console
const calculating = function(a) {
    console.log(typeof(a));
}
calculating(10);
//Write a function that determines whether a number is prime or not
const isPrime = function(number) {
    if (number === 1) {
        return false;
    }
    else if (number === 2) {
        return true;
    }
    else if (number % 2 == 0) {
        return false;
    }
    for (var i = 2; i < number/number; i++) {
        if (number % i == 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(11))
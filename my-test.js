const a = "a"; //str
const b = 2;  //num
const c = true; //bool
console.log("Perform addition of various types: " + a + c, a + b, b + c);
console.log("Perform multiplication of various types: " + a * c, a * b, b * c);
console.log("Divide different types: " + a / c, a / b, b / c);
const expCon = Number(a, c); //str, bool to num
const expCon2 = String(b, c); // num, bool to str
const expCon3 = Boolean(a, b); // str, num to bool
console.log("Perform explicit conversion: " + expCon, expCon2, expCon3);
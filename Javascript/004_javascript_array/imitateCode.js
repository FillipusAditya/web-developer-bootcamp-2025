// PUSH
console.log("\nPUSH");
let movieLine = ["tom", "oliver"];
console.log(movieLine);

movieLine.push("oliver");
console.log(movieLine);

// POP
console.log("\nPOP");
movieLine.pop();
console.log(movieLine);

let barbell = [];
console.log(barbell);
barbell.push(45);
barbell.push(45);
barbell.push(25);
barbell.push(10);
barbell.push(2.5);
console.log(barbell);
barbell.pop();
console.log(barbell);

// SHIFT
console.log("\nSHIFT");
movieLine.shift();
console.log(movieLine);
movieLine.unshift("Aditya");
console.log(movieLine);

// CONCAT
console.log("\nCONCAT");
let array1 = [1, 2, 3, 4, 5];
let array2 = ["one", "two", "three", "four", "five"];
let comboArray = array1.concat(array2);
console.log(comboArray);

// INCLUDES
console.log("\nINCLUDES");
console.log(array1.includes(5));
console.log(array1.includes(10));

// INDEX OF
console.log("\nINDEX OF");
let beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison"));
console.log(beasts.indexOf("bison", 2));
console.log(beasts.indexOf("dog"));

// REVERSE
console.log("\nREVERSE");
beasts.reverse();
console.log(beasts);

// SLICE
console.log("\nSLICE");
beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log("\nSLICE");
console.log(beasts.slice(2));
console.log(beasts.slice(0, 3));
console.log(beasts.slice(-3));

// SPLICE
console.log("\nSPLICE");
const months = ["Jan", "March", "April", "June"];
console.log(months);
months.splice(1, 0, "Feb");
console.log(months);
months.splice(4, 1, "May");
console.log(months);
months.splice(1, 2, "DELETED");
console.log(months);

// SORT
console.log("\nSORT");
const months1 = ["March", "Jan", "Feb", "Dec"];
months1.sort();
console.log(months1);
const unsortNumber = [7, 2, 5, 0, 1, 4];
unsortNumber.sort();
console.log(unsortNumber);

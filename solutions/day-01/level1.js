let arr = Array() // 1
let arr2 = [1, 2, 3, 5, 8, 4, 5, 4] // 2
console.log(arr2.length) // 3
console.log(` First element: ${arr2[0]}\n Last element: ${arr2[arr2.length - 1]}\n Middle element: ${arr2[Math.round(arr2.length / 2)]}`); // 4

let mixedDataTypes = ['arr', 3, null, undefined, 4.3, [5, 3]]
console.log(mixedDataTypes.length); // 5

itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazone'] // 6

console.log(itCompanies) // 7

console.log(itCompanies.length) // 8

console.log(itCompanies[0] + '\n' + itCompanies[itCompanies.length - 1] + '\n' + itCompanies[Math.round(itCompanies.length / 2) - 1]); // 9

console.log(itCompanies.toString()) // 10

itCompanies.forEach(element => {
    console.log(element)
}); // 10

itCompanies.forEach(element => {
    element.toUpperCase();
    console.log(element);
});

for (let i = 0; i < itCompanies.length; i++) {
    itCompanies[i].toUpperCase();
    console.log(itCompanies[i]);
}

console.log(`${itCompanies.slice(0, 5)} and ${itCompanies[itCompanies.length - 1]} are big IT companies.`) //13

let find = itCompanies.indexOf('Google');
if (find != -1) console.log(itCompanies[find]);
else {
    console.log("Company is not found") // 13
}

let oCompanies = []
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].includes('o')) {
        oCompanies.push(itCompanies[i]);
    }
}
console.log(oCompanies) // 14

console.log(itCompanies.sort()); // 15

console.log(itCompanies.reverse()); // 16

console.log(itCompanies.slice(0, 3)); // 17

console.log(itCompanies.slice(itCompanies.length - 1, itCompanies.length - 3)); // 18

console.log(itCompanies.slice(Math.round(itCompanies.length / 2) - 1)); // 19

console.log(itCompanies.shift()); // 20

//console.log(itCompanies)

console.log(itCompanies.pop()); // 22

console.log(itCompanies.splice(itCompanies.length - 1, 1)); // 22

console.log(itCompanies.splice(0, itCompanies.length)); // 23
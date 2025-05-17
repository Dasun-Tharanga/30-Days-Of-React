const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(numbers.splice(3, 5, 5, 5, 5, 5))
// console.log(numbers)

function reverse(array) {
    let i = 0
    let j = array.length - 1

    while (i < j) {
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }

}

reverse(numbers)
console.log(numbers)
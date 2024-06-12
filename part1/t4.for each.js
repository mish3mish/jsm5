function filterArray(numbers, value)  {
    let neededNumbers = [];
    numbers.forEach(function(number) {
        if (number > value) {
            neededNumbers.push(number)
        }
    }
    );
    return neededNumbers;
}


console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([12, 24, 8, 41, 76], 38));

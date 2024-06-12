const filterArray = (numbers, value) => {
    const filteredNumbers = [];
  
    numbers.forEach((number) => {
      if (number > value) {
        filteredNumbers.push(number);
      }
    });
  
    return filteredNumbers;
  }

console.log(filterArray([1, 2, 3, 4, 5], 3));
console.log(filterArray([12, 24, 8, 41, 76], 38));
function calculateTotalPrice(orderedItems) {
    let totalPrice = 0;

    orderedItems.forEach(function(item) {
    totalPrice+=item;
    }
    );

    return totalPrice;
}


console.log(calculateTotalPrice([12, 85, 37, 4]));
console.log(calculateTotalPrice([164, 48, 291]));
console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
var numbers = [22, 12, 25, 35, 33, 44, 55, 66, 66, 77, 90, 80];
for (var i = 0; i < numbers.length; i++) {
    var number = numbers[i];
    if (number > 50) {
        continue;
    }
    console.log(number)
}
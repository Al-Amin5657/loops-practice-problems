// for (var i = 0; i < 20; i++) {
//     if (i > 10) {
//         break;
//     }
//     console.log(i);
// }

// var numbers = 0;
// while (numbers < 10) {
//     console.log(numbers);
//     numbers++;
//     if (numbers > 5) {
//         break;
//     }
// }

var items = ['mobile', 'moneybag', 'Bottle', 'laptop', 'Notebook'];
for (var i = 0; i < items.length; i++) {
    var item = items[i];
    if (item == 'Bottle') {
        break;
    }
    console.log(item);
}
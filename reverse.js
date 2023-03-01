// var num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
// }

// var num = 10;
// while (num >= 1) {
//     console.log(num);
//     num--;
// }

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// for (var i = 10; i > 1; i--) {
//     console.log(i);
// }

var i = 0;
for (i = 0; i < 5; i++) { };
console.log(i);

var marks = [13, 15, 14, 20, 18];
for (var i = 0; i < marks.length; i++) {
    if (marks[i] >= 15) {
        continue;
    }
    console.log(marks[i]);
};

var name = false;
console.log(typeof name);

var i = 5;
for (; i < 5; i++) {
    console.log(i);
}

var i = 5;
for (i < 5; i++) {
    console.log(i);
}
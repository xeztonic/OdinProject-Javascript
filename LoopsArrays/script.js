// 1
console.log('--------------------------------');
console.log('Translate border-left-width to borderLeftWidth')
function camelize(str) {
    return str
        .split('-')
        .map(
            (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
        )
        .join('');
}
console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));

// 2
console.log('--------------------------------');
console.log('Filter range');
function filterRange(arr, a, b) {
    return arr
        .filter(elem => (elem >= a && elem <= b));

}
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3,1 (matching values)
console.log(arr); // 5,3,8,1 (not modified)


// 3
console.log('--------------------------------');
console.log('Filter range "in place"');

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.splice(i, 1);
            i--;
        }
    }
}
let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
console.log(arr); // [3, 1]


// 3
console.log('--------------------------------');
console.log('Sort in decreasing order');

let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a, b) => b - a)

console.log(arr3); // 8, 5, 2, 1, -10

// 4
console.log('--------------------------------');
console.log('Copy and sort array');

function copySorted(arr) {
    return arr.slice().sort();
}

let arr4 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr4);
console.log(sorted); // CSS, HTML, JavaScript
console.log(arr4); // HTML, JavaScript, CSS (no changes)


// 5
console.log('--------------------------------');
console.log('Shuffle an array');
function shuffle(arr) {
    return arr.sort(() => Math.random() - 0.7);
}
let arr5 = [1, 2, 3];
console.log(shuffle(arr5));
// arr = [3, 2, 1]
console.log(shuffle(arr5));
// arr = [2, 1, 3]
console.log(shuffle(arr5));
// arr = [3, 1, 2]


// 6
console.log('--------------------------------');
console.log('Filter unique array members');

function unique(arr) {
    return Array.from(new Set(arr));
}

let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(strings)); // Hare, Krishna, :-O
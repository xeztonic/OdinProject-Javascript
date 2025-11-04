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
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log(arr); // [3, 1]


// 3
console.log('--------------------------------');
console.log('Sort in decreasing order');
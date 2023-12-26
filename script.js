function isInc(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] >= arr[i + 1]) {
            return false;
        }
    }
    return true;
}

const a1 = [3, 5, 5, 10, 34];
const a2 = [5, 12, 13, 20];

// console.log(isInc(a1));
// console.log(isInc(a2));

//............................

const arr1 = [2, 4, 5, 6, 19];
const arr2 = [1, 3, 7, 10, 20];
const arr3 = [2, 4, 5, 6, 19];

function compare(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (!arr2.includes(arr1[i])) {
            return false; //if not equal
        }
    }
    return true; //if equal
}

console.log(compare(arr1, arr3));
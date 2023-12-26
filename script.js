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

const a4 = [2, 4, 5, 6, 19, 21, 22];
const a5 = [1, 3, 7, 10, 20];
const a3 = [2, 4, 5, 6, 19];
const a6 = [2, 4, 5, 6, 19];

function compare(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i])) {
            return true; //if equal
        }
    }
    return false; //if not equal
}

// console.log(compare(arr1, arr3));

//.............................................

function isEqual(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every(elem => arr2.includes(elem));
}

// console.log(isEqual(a3, a2));

//more complete version

function checkEqual(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if(arr2.includes(arr1[i])) {
            return true;
        }
    }

    return false;
}

console.log(checkEqual(a6, a3));
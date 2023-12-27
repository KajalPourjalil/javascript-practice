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

// console.log(checkEqual(a6, a3));

//.............

let c = 9;
let d = 10;

function addNum(a, b) {
    console.log(a + b);
}

// addNum(c, d);

//..................


function summ(n) {
    let sum = 0;
    for (let i = 0; i <= n; i++){
        sum += i;
    }
    return sum;
}

// console.log(summ(10));

//................

const b = {
    name: ['Kajal', 'Flora', 'Alexandra'],
    age: ['25', '25', '42']
}

// for (let key in b) {
    // console.log(key);
    // console.log(b[key]);
// }

// for(let key in b) {
    // console.log(b[key]);
// }

//..........................

//fibonacci

function findFib(n) {
    const fib = [0, 1];
    for (let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib;
}

// console.log(findFib(3));
// console.log(findFib(5));
// console.log(findFib(7));

//...............................

function factorial(n) {
    let fac = 1;
    for(let i = 2; i <= n; i++){
        fac *= i;
    }
    return fac;
}

// console.log(factorial(10));

//....................................

function isPrime(n) {
    if (n < 2) {
        return false;
    }

    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
    }

    return true;
}

// console.log(isPrime(5));
// console.log(isPrime(7));

//.....................................

function pofTwo(n) {
    if (n < 1) {
        return false;
    }
    while(n > 1){
        if (n % 2 != 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

// console.log(pofTwo(1));
// console.log(pofTwo(2));
// console.log(pofTwo(5));

//.................................

function isPowofTwo(n) {
    if (n < 1) {
        return false;
    }

    return (n & (n-1)) === 0;
}

// console.log(isPowofTwo(5));

//..................................
//finding an nth element of the fib sequence

function fibRec(n){
    if (n < 2) {
        return n;
    }
    return fibRec(n - 1) + fibRec(n - 2)
}

// console.log(fibRec(0));
// console.log(fibRec(1));
// console.log(fibRec(6));




//.....................................

function facRec(n){
    if (n === 0) {
        return 1;
    }
    return facRec(n - 1) * n; 
}

// console.log(facRec(5));

//......................................
//linear search

let arr = [-5, 2, 10, 4, 6];

function linearS(t) {
    for (let i = 0; i<arr.length; i++){
        if (arr[i] === t) {
            return i;
        }
    }
    return -1;
}

// console.log(linearS(7));


//second way

function lin2(arr, t){
    for (let i = 0; i < arr.length; i++){
        if (arr[i] === t){
            return i;
        }
    }
    return -1;
}

// console.log(lin2([-5, 2, 10, 4, 6], 6));

//...........................................
//binary search

let a7 = [3, 2, 10, 9, 15, 1, -4, 13];

function binaryS(arr, t){
    let leftI = 0;
    let rightI = arr.length - 1;

    while (leftI <= rightI){
        let midI = Math.floor((rightI + leftI)/2);
        if (arr[midI] === t){
            return midI;
        } else if (arr[midI] > t){
            rightI = midI - 1;
        } else {
            leftI = midI + 1;
        };
    };
    return -1;
}

console.log(binaryS(a7, 1));


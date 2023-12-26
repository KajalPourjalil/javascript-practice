function areIncreasing(arr) {
    for (let i = 0; i < arr.length - 1; i ++) {
        if (arr[i] >= arr[i + 1] || arr[i] === arr[i + 1]){
            return false;
        }
    }
    return true;
}

const incArr = [1, 2, 3, 4, 5, 7, 10];
const notIncArr = [5, 5, 7];

console.log(areIncreasing(incArr));
console.log(areIncreasing(notIncArr));
let array1 = [5, 4, 4, 1];
let integer = 3;

function allGreaterThan(arr, t){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < t){
            return false;
        }
        else
        {
            return true;
        }
    }
    return true;
}

// console.log(allGreaterThan(array1, integer));

function allGreaterThanTwo(arr, t) {
    for(let i = 0; i < arr.length; i++){
        while(arr[i] < t){
            return true;
        }
    }
    return arr;
}

// console.log(allGreaterThanTwo(array1, integer));


//return the index of a value

let arr4 = [22,33,44,55,66];

function findIndex(n, arr){
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === n) {
            return i;
        }
    }
    return -1;
}

// console.log(findIndex(66, arr4))

//time complexity: O(n)

//create a function to make an array with all numbers from 1 to 100 in it
function createArray() {
    let newArr = [];
    for(let i = 2; i <= 100; i++) {
        newArr.push(i);
    }
    return newArr;
    // console.log(newArr)
}

// console.log(createArray());
// createArray();



//given an array with all the integers between 1 and 100 except for one, find the missing number
function findMissingNumber(nums){
    let sum = ((nums.length + 1) * (nums.length + 2)) / 2; //formula to calculate the sum of numbers from 1 to
    let actualSum = nums.reduce((a, b) => a + b); //sum of given numbers in array
    return sum - actualSum; //missing number is difference between expected sum and actual sum
}

// console.log(findMissingNumber(newArr));

function createArrayAndFindNumber() {
    let myArr = createArray();
    let result = findMissingNumber(myArr);
    return `The missing number in the array is ${result}`;
}

// console.log(createArrayAndFindNumber());

//merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    const merged = [];
    let i = 0;  let j = 0;
  
    while (i < arr1.length && j < arr2.length) {
      if (arr1[i] < arr2[j]) {
        merged.push(arr1[i]);
        i++;
      } else {
        merged.push(arr2[j]);
        j++;
      }
    }
  
    while (i < arr1.length) {
      merged.push(arr1[i]);
      i++;
    }
  
    while (j < arr2.length) {
      merged.push(arr2[j]);
      j++;
    }
  
    return merged;
  }

let arr1 = [3,5,7,8];
let arr2 = [12,14,15,20];

console.log(`Merged Array: ${mergeArray(arr1, arr2)}`);
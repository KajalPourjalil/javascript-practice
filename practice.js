//merge two sorted arrays
function mergeSort(arr1, arr2) {
  let newArr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      newArr.push(arr1[i]);
      i++;
    } else {
      newArr.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    newArr.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    newArr.push(arr2[j]);
    j++;
  }

  return newArr;
}

a1 = [1, 3, 5, 7, 9];
a2 = [2, 4, 6, 8, 10];

a3 = [-9, -7, -5, -3, -1];
a4 = [-10, -8, -6, -4, -2];

a5 = [1.54, 2.3, 4.01, 5.9];
a6 = [-5.04, -4.67, -3.99, -2.89];

// console.log(mergeSort(a5, a6));

////////////////////////////////////////////////////////////

function removeDuplicate(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}

let a7 = [5, 5, 4, 4, 9, 9, 10, 11, 12, 13, 13, 13, 13];
let a9 = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
// console.log(removeDuplicate(a9));

/////////////////////////////////////////////////////////////

function countFreq(arr, n) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == n) {
      count++;
    }
  }
  return count;
}

// console.log(countFreq(a7, 13));

/////////////////////////////////////////////////////////////
//Two sum function
function twoSum(arr, n) {
  for (let i = 0; i < arr.length; i++) {
    let diff = n - arr[i];
    if (diff > arr[i] && arr.indexOf(diff) != i) {
      return [i, arr.indexOf(diff)];
    }
  }
  return false;
}

let a8 = [2, 3, 4, 5, 6, 7];
// console.log(twoSum(a8, 7));

///////////////////////////////////////////////////////////////

function findMax(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

function findMin(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

// console.log(findMax(a6));
// console.log(findMin(a8));

////////////////////////////////////////////////////////////////

function remove(nums, val) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[count++] = nums[i];
    }
  }
  return count;
}

// console.log(remove(a9, 2));

/////////////////////////////////////////////////////////////////

function searchInsert(arr, k) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let mid = Math.floor((end + start) / 2);
    if (k === arr[mid]) {
      return mid;
    } else if (k < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return start;
}

// console.log(searchInsert(a8, 8));

/////////////////////////////////////////////////////////////

function maxSub(arr) {
  // let maximum = Math.max(arr);
  // if (maximum < 0) return maximum;

  let max_so_far = -Number.MAX_SAFE_INTEGER;
  let max_ending_here = 0;

  for (let i = 0; i < arr.length; i++) {
    max_ending_here += arr[i];
    max_ending_here = Math.max(max_ending_here, arr[i]);
    max_so_far = Math.max(max_so_far, max_ending_here);
  }

  return max_so_far;
}

// console.log(maxSub(a8));

//////////////////////////////////////////////////////////////////

function plusOne(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] < 9) {
      arr[i]++;
      return arr;
    }
    arr[i] = 0;
  }

  const result = new Array(arr.length + 1).fill(0);
  result[0] = 1;
  return result;
}

let a10 = [9, 9, 9];
// console.log(plusOne(a10));

//////////////////////////////////////////////////////////////////

function findSing(arr) {
  for (let i = 0; i < arr.length; i++) {
    let flag = true;
    for (let j = i + 1; i < arr.length; j++) {
      if (arr[i] == arr[j]) {
        flag = false;
      }
    }
    if (flag == true) return arr[i];
  }
  return -1;
}

let a11 = [2, 1, 5, 3, 1, 5, 2];
// console.log(findSing(a11));

////////////////////////////////////////////////////////////////


// function plusMinus(arr) {
//   let pos = 0;
//   let neg = 0;
//   let zero = 0;
//   for(let i = 0; i <arr.length; i++){
//       if(arr[i] === 0) zero++;
//       else if (arr[i] > 0) pos++;
//       else neg++;
//   }
//   return (pos / arr.length + '\n' + neg / arr.length + '\n' + zero / arr.length);

// }

function plusMinus(arr) {
  // Write your code here
  let pos = 0;
  let neg = 0;
  let zero = 0;
  arr.forEach((number) => {
      if (number > 0) pos++;
      if (number < 0) neg++;
      if (number == 0) zero++;
  });
  return (pos / arr.length + '\n' + neg / arr.length + '\n' + zero / arr.length);

}

let a12 = [-4, -1, 0, 9, 12, -5, 8];
// console.log(plusMinus(a12));

////////////////////////////////////////////////////

function staircase(n){
  for(let i = 0; i<=n; i++){
    let spaces = n - i;
    console.log(' '.repeat(spaces) + '#'.repeat(i));
  }
}

// staircase(6);

//////////////////////////////////////////////////

function miniMaxSum(arr){
  let newArr = arr.sort();
  let min = 0;
  let max = 0;

  for(let i = 0; i <newArr.length - 1; i++){
    min += newArr[i];
  }

  for(let j = 1; j < newArr.length; j++){
    max += newArr[j];
  }

  return [min, max];
}

// console.log(miniMaxSum(a1));

//////////////////////////////////////////////

// function birthdayCakeCandles(candles) {
//   let newarr = candles.sort();
//   let count = 0;
//   let max = [];
//   for(let i = 0; i < candles.length; i++){
//     if(candles[i] < candles[i+1]) max.push(candles[i+1]);
//     if(max.includes(candles[i])) count++;
//   }

//   return count;
// }

// const newArray = candles.sort((a,b)=> a-b);
//     // console.log(newArray);
//     let cnt = 0;
//     var maxAge =newArray[newArray.length-1];
//     let arrLength = newArray.length;
//     for(let i=0; i<arrLength;i++){
//         if(maxAge <= candles[i]){
//             var maxAge = candles[i];
//             //console.log(candles[i]);
//             cnt++;
//             // console.log(cnt);
//         }
        
//     }
//     return cnt;

// let candles = [4,4,1,3];
// console.log(birthdayCakeCandles(candles));

/////////////////////////////////////////////////////////////

function isSubset(arr1, arr2){
  // let set1 = arr1.sort();
  // let set2 = arr2.sort();
  for(let i = 0; i < arr1.length; i++){
    // if(arr2[i] === arr1[i]) return true;
    let exists = false;
    for(let j = 0; j < arr2.length; j++){
      if (arr1[i] === arr2[j]){
        exists = true;
      }
    } if(!exists) return false;
  }
  
  return exists;
}

let set1 = [5,7,8];
let set2 = [7,5];

console.log(isSubset(set1, set2));
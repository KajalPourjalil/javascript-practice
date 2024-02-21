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

console.log(searchInsert(a8, 8));

// 1. Create a function called "addToFifteen" that takes in an array of integers and returns an
// updated array where each element is increased by 15.

function addToFifteen2(arr) {
  arr.forEach((element, index) => {
    arr[index] += 15;
  });
  return arr;
}

let arr1 = [1, 2, 3, 4, 5];
// console.log(addToFifteen2(arr1));

// 2. Create a function called containsDuplicates that takes in an array and returns true if
// there are any duplicates in the array, and false if there are no duplicates.

// function containsDuplicate(arr) {
//     let duplicates = [];
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = arr[i]; j < arr.length; j++){
//             if (arr[j]  === arr[i]){
//                 duplicates.push(arr[i]);
//             }
//         }
//     }
//     return duplicates;
// }

function containsDuplicate(arr) {
  let duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] === arr[i]) {
        if (!duplicates.includes(arr[i])) {
          duplicates.push(arr[i]);
        }
        break;
      }
    }
  }
  return duplicates;
}

let arr2 = [4, 3, 2, 4, 5, 6, 7, 6];
// console.log(containsDuplicate(arr2));

// 3. Write a JavaScript program that prompts the user to enter two arrays and compares them. If one array is larger than the other,
// display which array is larger and how many elements are in each. If they are equal, display "The arrays are identical."
// Otherwise, display "The arrays are not equal"

function compare(arr1, arr2) {
  if (arr1.length === arr2.length) {
    return `equal`;
  } else if (arr1.length > arr2.length) {
    return `Not equal. array1 is larger. array1 has ${arr1.length} elements and array2 has ${arr2.length} elements.`;
  } else {
    return `Not equal. array2 is larger. array1 has ${arr1.length} elements and array2 has ${arr2.length} elements.`;
  }
}

// console.log(compare(arr1, arr2));

// 4. Create a function called `multiplyAll` that takes in an array of integers and
// returns the product of all the elements in the array. If the input array is empty, the function should return -1.

function multiplyAll(arr) {
  let sum = 1;
  if (arr.length == 0) return -1;
  for (let i = 0; i < arr.length; i++) {
    sum *= arr[i];
  }
  return sum;
}

// console.log(multiplyAll(arr2));

// 5. Write a JavaScript program that takes two arrays as input and
// returns an array containing only elements that are common.

function findCommon(arr1, arr2) {
  let commonArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      commonArr.push(arr1[i]);
    }
  }
  return commonArr;
}

let arr3 = [22, 34, 56, 78, 90, 100];
let arr4 = [22, 45, 67, 90, 100, 56, 34];
// console.log(findCommon(arr3, arr4));

// 6. Create a function called "sortByName" that takes an array of objects
// with properties "name" and "age". The function should sort this array by name in alphabetical order.

function sortByName(arr) {
  arr.sort((a, b) => (a.name > b.name ? 1 : -1));
  return arr;
}

let people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 22 },
];
// console.log(sortByName(people));

// 7. Create a function called "addToFive" that takes in an array of integers
// and returns an array where each element has been incremented by five.

function addToFive(arr) {
  arr.forEach((element, index) => {
    arr[index] += 5;
  });
  return arr;
}

// console.log(addToFive(arr1));

// 8. Write a function called checkForDuplicates that takes in an array and returns true or false based on the elements.

function checkForDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) == i) {
      return false;
    }
    return true;
  }
}

// console.log(checkForDuplicates(arr3, arr4));

// 9. Write a function called checkIfPalindrome that checks if an array contains a palindrome.

function checkIfPalindrome(arr) {
  for (let i = 0; i < arr.length; i++) {
    let reversedArr = arr.reverse();

    // compare the original array with its reverse to see if it is a palindrome
    if (
      arr.length === reversedArr.length &&
      arr.every(
        (element, index) => element === reversedArr[arr.length - index - 1]
      )
    ) {
      // Do something if the arrays are equal and reversed
      return true;
    } else {
      return false;
    }
  }
}

// 10. Write a JavaScript program that takes two arrays as input and returns an array containing elements common to both

function both(arr1, arr2) {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      newArr.push(arr1[i]);
    }
  }
  return newArr;
}

// console.log(both(arr3, arr4));

// 11. Write a function called checkAverage that takes in an array of numbers
// as its only argument and returns whether or not the average of the array is greater than 75.

function checkAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  if (sum / arr.length > 75) return true;
  else return false;
}

let arr5 = [232, 543];
// console.log(checkAverage(arr5));

// 12. Write a JavaScript program that prompts the user to enter three numbers and returns whether or not they are prime.
// If any of the inputted numbers is less than or equal to zero, the program should return false.

function checkPrime(n1, n2, n3) {
  let isPrime = 0;
  // }

  function isPrimeNumber(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  if (!isPrimeNumber(n1) || !isPrimeNumber(n2) || !isPrimeNumber(n3)) {
    return false;
  }

  return true;
}

// console.log(checkPrime(0, 3, 3));

// 13. Write a JavaScript program that takes two arrays as input and returns the number of common elements between them

function noCommon(arr1, arr2) {
  let count = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) {
      count++;
    }
  }
  return count;
}

// console.log(noCommon(arr3, arr4));

// 14. Write a JavaScript program that takes two arrays as input and returns the sum of their elements.
// If either or both of the input arrays are empty, the program should handle this case appropriately by returning -1

function sumArray(arr1, arr2) {
  if(arr1.length !== arr2.length || arr1.length ===0 || arr2.length ===0) return -1; 

  let newSum = [];
  for (let i = 0; i < arr1.length; i++) {
    newSum.push(arr1[i] + arr2[i]);
  }

  return newSum;
}

let arr6 = [6,7,8,9,10];
console.log(sumArray(arr1, arr6));

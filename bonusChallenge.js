
// 1. Create a function called "addToFifteen" that takes in an array of integers and returns an 
// updated array where each element is increased by 15.

function addToFifteen(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += 15;
    }
    return arr;
}

function addToFifteen2(arr) {
    arr.forEach((element, index) => {
        arr[index] += 15;
    });
    return arr;
}

let arr1 = [1,2,3,4,5];
// console.log(addToFifteen2(arr1));


// 2. Create a function called containsDuplicates that takes in an array and returns true if 
// there are any duplicates in the array, and false if there are no duplicates.

// 3. Write a JavaScript program that prompts the user to enter two arrays and compares them. If one array is larger than the other, 
// display which array is larger and how many elements are in each. If they are equal, display "The arrays are identical." 
// Otherwise, display "The arrays are not equal"

// 4. Create a function called `multiplyAll` that takes in an array of integers and 
// returns the product of all the elements in the array. If the input array is empty, the function should return -1.

// 5. Write a JavaScript program that takes two arrays as input and 
// returns an array containing only elements that are common.

// 6. Create a function called "sortByName" that takes an array of objects 
// with properties "name" and "age". The function should sort this array by name in alphabetical order.

// 7. Create a function called "addToFive" that takes in an array of integers 
// and returns an array where each element has been incremented by five.

// 8. Write a function called checkForDuplicates that takes in an array and returns true or false based on the elements.

// 9. Write a function called checkIfPalindrome that checks if an array contains a palindrome.

// 10. Write a JavaScript program that takes two arrays as input and returns an array containing elements common to both

// 11. Write a function called checkAverage that takes in an array of numbers 
// as its only argument and returns whether or not the average of the array is greater than 75.

// 12. Write a JavaScript program that prompts the user to enter three numbers and returns whether or not they are prime. 
// If any of the inputted numbers is less than or equal to zero, the program should return false.

// 13. Write a JavaScript program that takes two arrays as input and returns the number of common elements between them

// 14. Write a JavaScript program that takes two arrays as input and returns the sum of their elements. 
// If either or both of the input arrays are empty, the program should handle this case appropriately by returning -1



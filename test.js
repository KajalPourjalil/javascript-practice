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

console.log(findIndex(66, arr4))

//time complexity: O(n)

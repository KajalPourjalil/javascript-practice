//merge two sorted arrays
function mergeSort(arr1, arr2){
    let newArr = [];
    let i = 0;
    let j = 0;

    while(i < arr1.length && j < arr2.length){
        if(arr1[i] < arr2[j]){
            newArr.push(arr1[i]);
            i++;
        }
        else {
            newArr.push(arr2[j]);
            j++;
        }
    }

    while(i < arr1.length){
        newArr.push(arr1[i]);
        i++;
    }

    while(j < arr2.length){
        newArr.push(arr2[j]);
        j++;
    }

    return newArr;
}

a1 = [1,3,5,7,9];
a2 = [2,4,6,8,10];

a3 = [-9,-7,-5,-3,-1];
a4 = [-10,-8,-6,-4,-2];

a5 = [1.54, 2.3, 4.01, 5.9];
a6 = [-5.04, -4.67, -3.99, -2.89];


console.log(mergeSort(a5, a6));
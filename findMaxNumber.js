// function findMax(arr) {
//     let max = arr[0];
//     for (let num of arr) {
//         if (num > max) 
//         {
//              max = num;
//         }
           
//     }
//     return max;
// }

// console.log('The max number among the array is', findMax([5, 1, 9, 3]))


function findMaxNum(arr){
    const result = Math.max(...arr)
    return result;
}

const number = findMaxNum([1,3,4,6,7])
console.log(number)
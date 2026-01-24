// function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed = reversed + str[i];
//     }
//     return reversed;
// }

// console.log("After reversing the string the output is : ", reverseString('hello'))



function reversedString(str){
    const reversed = str.split('').reverse().join('')
    return reversed;
}

const result = reversedString('hello')
console.log(result)
// SNACK BONUS
const myArray = [23, 14, 6, 8, 10, 25, 85, 58, 74, 9, 5, 7, 12];
const min = 1;
const max = 4;

let newArray = getSubArray(myArray, min, max)
console.log(newArray);


//soluzione con foreach
function getSubArray(array, min, max) {
    const result=[]
    array.forEach((elem, index) => {
        if( index >= min && index <= max){
            result.push(elem)
        }
    });

    
    return result
}

// //soluzione con filter
// function getSubArray(array, min, max) {
//     return newArray.filter((elem, index) => index >= min && index <= max)
// }
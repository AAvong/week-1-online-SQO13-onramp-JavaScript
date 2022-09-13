function countTruthy(arr){
    let arr1 = arr;
    let zero = arr1.filter(value => value > 0);
    let str = zero.filter(value => value > "")
    let gloria = str.filter(value => value > null) // Gloria was an inspiration to finding the solution
    let count = gloria.length;
    console.log(count);
}  

countTruthy(['', 0, 0, undefined, 7]);
module.exports = countTruthy
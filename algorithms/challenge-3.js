function sumMix(arr) {
   let arr1 = arr;
   let sum = 0;
    for( i = 0; i < arr1.length; i++){
       sum = arr1[i] + sum;
    }
   console.log(sum);
 }
sumMix([9, 3, '7', '3']);
  module.exports = sumMix
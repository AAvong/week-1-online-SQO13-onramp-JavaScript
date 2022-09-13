function fizzBuzz(input){
if ((input % 3) == 0 && (input % 5) == 0){
    return "fizzbuzz";
}else if((input % 3) == 0){
    return "fizz"
}else if((input % 5) == 0){
    return "buzz"
}else{
    return input;
}
  
}
console.log(fizzBuzz(7));

module.exports = fizzBuzz

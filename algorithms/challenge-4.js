function calculateGrade(marks) {
    let arr1 = marks;
    let sum = 0;
     for( i = 0; i < arr1.length; i++){
        sum = arr1[i] + sum;
     }

     avarage = sum / arr1.length

     if (avarage > 0 && avarage < 50){
        console.log("F");
    }else if (avarage > 49 && avarage < 60){
        console.log("E");
    }else if (avarage > 59 && avarage < 70){
        console.log("D");
    }else if (avarage > 69 && avarage < 80){
        console.log("C");
    }
    else if (avarage > 79 && avarage < 90){
        console.log("B");
    }else if (avarage > 89 && avarage < 101){
        console.log("A");
    }else {
        console.log("Your average score could not be determined.")
    }
    console.log("Average = " + avarage);
 }
 calculateGrade([90, 98, 97]);
  module.exports =calculateGrade

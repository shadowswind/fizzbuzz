'use strict';
function  game(num) {
    var fizz = 3;
    var buzz = 5;
    var whizz =7;
    var word;
    if ((num + "").indexOf("3")>-1){
        word = "fizz";
    }else if (num % fizz ==0 && num % buzz==0 && num % whizz ==0){
        word = "fizzbuzzwhizz";
    }
    else if (num % fizz==0 && num % buzz==0){
        word ="fizzbuzz"
    }
    else if (num % fizz ==0 && num % whizz ==0){
        word = "fizzwhizz";
    }
    else if (num % buzz ==0 && num % whizz ==0){
        word = "buzzwhizz";a
    }else if (num % buzz==0){
        word = "buzz";
    }else if (num % whizz==0){
        word = "whizz";
    }else if (num % fizz ==0){
        word = "fizz";
    }else word = num;
    return word;

}

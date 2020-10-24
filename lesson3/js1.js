/**
 * Вывести все простые числа в промежутке от 0 до 100
 * 
 * 
 */

function checkPrime(number){
    if (number == 2 || number == 3 || number == 5 || number == 7){
        return true;
    }
    else if (number < 2 || number % 2 == 0){
        return false;
    }
    else {
        for (let divider = 3; divider <= number/2; divider+=2){
            if(number%divider == 0){
                return false;
            }   
        }
    return true;
    }
}

let i = 0;
while(i<=100){
    if (checkPrime(i)){
        console.log(i);
    }
    i++;
}

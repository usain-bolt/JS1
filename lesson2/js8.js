//8) *С помощью рекурсии организовать функцию возведения числа в степень. 
//Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow){
    if (pow == 1){
        //console.log(val);
        return val;
    }
    else {
        val * power(val, pow - 1);
    }
}

console.log(power(2,2));
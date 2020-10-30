/**
 * @description Преобразование числа в объект., мы должны получить на выходе объект, 
 * в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
 * Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’: 
 * 2}. Если число превышает 999, необходимо выдать соответствующее сообщение с помощью console.log и 
 * вернуть пустой объект. выходе объект, в котором в соответствующих свойствах описаны единицы, десятки и сотни. 
 * Например, для числа 245 мы должны получить следующий объект: {‘единицы’: 5, ‘десятки’: 4, ‘сотни’
 * 
 * @param {number} number - число от пользователя от 0 до 999
 * @return {Object} 
 */

 function numberConversion(number) {
    if(isNaN(number)){
        return console.log("Вы ввели не число");
    }

    else if(number > 999 || number < 0){
        var object = {};
        return console.log(object);
    }

    else {
        let array = number.toString().split("");

        function Number(a, b, c){
            this.hundreds = a;
            this.dozens = b;
            this.units = c;
        }

        let result;

        switch (array.length){
            case 1: result = new Number(0, 0, array[0]);
            break;
            case 2: result = new Number(0, array[0], array[1]);
            break;
            case 3: result = new Number(array[0], array[1], array[2]);
            break;
        }

        return result;
        }
}

  console.log(numberConversion(+prompt("Введите число от 0 до 999", 0)));
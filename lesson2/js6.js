//6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
//где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) 
//и вернуть полученное значение (использовать switch).

function addition(a, b){
    return a + b;
}

function subtraction(a, b){
    return a - b;
}

function multiplication(a, b){
    return a * b;
}

function division(a, b){
    return a / b;
}

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case addition: 
            console.log(addition(arg1, arg2));
            break;
        case subtraction: 
            console.log(subtraction(arg1, arg2));
            break;
        case multiplication: 
            console.log(multiplication(arg1, arg2));
            break;
        case division: 
            console.log(division(arg1, arg2));
            break;
    }
}

//Проверка

mathOperation(5, 5, division);
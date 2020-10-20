//5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return.

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

//Проверка

console.log("Результат сложения " + addition(5,5));
console.log("Результат вычитания " + subtraction(5,5));
console.log("Результат умножения " + multiplication(5,5));
console.log("Результат деления " + division(5,5));
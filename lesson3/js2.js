/** 2. С этого урока начинаем работать с функционалом интернет-магазина. Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины в зависимости от находящихся в ней товаров.
3. Товары в корзине хранятся в массиве. Задачи:
a) Организовать такой массив для хранения товаров в корзине;
b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

let marketPlace = [
    {
        name: "tv",
        price: 100,
    },
    {
        name: "ps5",
        price: 200,
    },
    {
        name: "iphone",
        price: 300,
    }
]

let busket = [];

function putToBusket(){
    busket.push(marketPlace[1]);
    console.log(busket);
    return busket;
}

function countBasketPrice(array){
    let sum = 0;
    for (item of array){
        sum += item.price;
    }
    console.log("Товаров в корзине на сумму " + sum)
	return sum;
}

putToBusket();
countBasketPrice(busket);
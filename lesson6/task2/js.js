let goods = [
    {
    title: "Standard",
    price: 100,
    description: "Пакет стандарт",
    },
    {
    title: "Premium",
    price: 150,
    description: "Пакет премиум",
    },
    {
    title: "Lux",
    price: 200,
    description: "Пакет люкс",
    }
]

let sum = 0;
let count = 0;
let busketArray = [];

let busket = document.getElementsByClassName("busket")[0];
let goodtitle = document.createElement("div");
busket.appendChild(goodtitle);
let goodPrice = document.createElement("div");
busket.appendChild(goodPrice);
let result = document.createElement("div");
result.className = "container-result";
busket.appendChild(result);
let btnEmpty = document.createElement("button");
btnEmpty.innerText = "Очистить корзину";
busket.appendChild(btnEmpty);
btnEmpty.onclick = empty;

function empty(){
    goodtitle.innerText = "";
    result.innerHTML = "";
    sum = 0;
}

for(let i = 0; i < goods.length; i++){
    let container = document.getElementsByClassName("container")[0];
    let wrp = document.createElement("div");
    wrp.className = "wrp-item " + i;
    container.appendChild(wrp);
    let goodTitle = document.createElement("h3");
    goodTitle.className = "good-title " + i;
    goodTitle.innerHTML = goods[i].title;
    wrp.appendChild(goodTitle);
    let goodPrice = document.createElement("span");
    goodPrice.className = "good-price " + i;
    goodPrice.innerHTML = goods[i].price + "&#36;";
    wrp.appendChild(goodPrice);
    let goodDescription = document.createElement("span");
    goodDescription.innerHTML = goods[i].description;
    wrp.appendChild(goodPrice);
    let btnBuy = document.createElement("button");
    btnBuy.innerText = "Купить";
    btnBuy.className = "btn " + i;
    wrp.appendChild(btnBuy);
    btnBuy.onclick = buyGood;
}

function buyGood(event){
    let selectedItem = goods[event.target.className.split(" ")[1]];
    goodtitle.innerText += selectedItem.title + ", ";
    sum += selectedItem.price; 
    result.innerHTML = "Итог " + sum + "&#36;";
}
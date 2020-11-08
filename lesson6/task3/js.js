const arrayImages = [];
let img;

for (let i = 0; i < 4; i++){
    img = document.createElement("img");
    img.src = "img/" + i + ".png";
    img.className = "container-img";
    arrayImages.push(img);
}

let a = document.createElement("div");
a.className = "wrap-img";


let b = document.getElementsByClassName("container")[0];

console.log("Значение а" + a);
console.log("Значение b" + b);

b.appendChild(a);


let i = 0;
a.appendChild(arrayImages[i]);

const btnBack = document.getElementsByClassName("back")[0];
const btnForward = document.getElementsByClassName("forward")[0];

function forward(){
    arrayImages[i].style.display = "none";
    i--;
    if (i < 0){
        i = 3;
    }
    /* arrayImages[i].style.display = "block";
 */
    a.appendChild(arrayImages[i]);
    arrayImages[i].style.display = "block";
}

function back(){
    arrayImages[i].style.display = "none";
    i++;
    console.log(i);
    if (i > 3){
        i = 0;
    }
    a.appendChild(arrayImages[i]);
    arrayImages[i].style.display = "block";
}

btnForward.addEventListener("click", forward);
btnBack.addEventListener("click", back);
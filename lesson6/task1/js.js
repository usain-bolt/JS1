let img;
const body = document.body;
const header = document.createElement("h1");
header.textContent = "Первое задание (картинки)";
header.style.textAlign = "center";
body.appendChild(header);

const container = document.createElement("div");
container.className = "container";
body.appendChild(container); 
container.style.width = "600px";
container.style.margin = "0 auto";

function showSmallImg(){
    for (let i = 0; i < 3; i++){
        img = document.createElement("img");
        img.className = "img" + "_" + i;
        container.appendChild(img);
        img.src = "small/" + i + ".png";
    }
}

const block = document.createElement("div");
block.className = "container-img";
block.style.width = "800px";
block.style.margin = "0 auto";
body.appendChild(block);
let imgBig = document.createElement("img");
imgBig.className = "img_big";
imgBig.src = "";
block.appendChild(imgBig);

showSmallImg();

let array = document.querySelectorAll("img");

for (let i = 0; i < 3; i++){
    array[i].onclick = clickOnImage;
}

function clickOnImage(event){
    let f = event.target;
    console.log(f);
    let g = f.className.split("_");
    console.log(g);
    imgBig.src = "big/" + g[1] + ".png";

    imgBig.onerror = function() {alert("Картинки нет")}
}


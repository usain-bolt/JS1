/**
 * @description Функция создает разлиновую шахматную доску
 * 
 * @param figures - массив хранящий шахматные фигуры;
 * 
 */

const arrayLetters = ["", "A", "B", "C", "D", "E", "F", "G", "H", ""]
const figuresBlack1 = ['8','&#9820;','&#9822;','&#9821;','&#9819;','&#9818;','&#9821;','&#9822;','&#9820;','8'];
const figuresBlack2 = ['7','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','&#9823;','7'];
const figuresWhite1 = ['2','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','&#9817;','2'];
const figureswhite2 = ['1','&#9814;','&#9816;','&#9815;','&#9813;','&#9812;','&#9815;','&#9816;','&#9814;','1'];
let body;
let container;
let header;
let block;

function createDesk(){
    body = document.body;
    container = document.createElement("div");
    container.className = "desk";
    body.append(container);
    header = document.createElement("h1");
    header.textContent = "Шахматная доска";
    body.prepend(header);

    for (let i = 0, a = 9; i < 10, a >= 0; i++, a--){ // i - строка 
        for (let j = 0; j < 10; j++){// j - столбец

            block = document.createElement("div");
            block.className = "desk_square";
            container.appendChild(block);

            switch (i){
                case 0: 
                    block.textContent = arrayLetters[j];
                    block.className += " rotate";
                    break;
                case 1: 
                    block.innerHTML = figuresBlack1[j];
                    if (j == 9){
                        block.className += " rotate";
                    }
                    break;
                case 2: 
                    block.innerHTML = figuresBlack2[j];
                    if (j == 9){
                        block.className += " rotate";
                    }
                    break;
                case 7: 
                    block.innerHTML = figuresWhite1[j];
                    if (j == 9){
                        block.className += " rotate";
                    }
                    break;
                case 8: 
                    block.innerHTML = figureswhite2[j];
                    if (j == 9){
                        block.className += " rotate";
                    }
                    break;
                case 9: 
                    block.textContent = arrayLetters[j];
                    break;
                default: 
                    if(j == 0){
                        block.textContent = a;
                    }
                    if (j == 9){
                        block.textContent = a;
                        block.className += " rotate";
                    }
                    break;
            }

            if ((i+j)%2 != 0){
                if (i == 0 || i == 9 || j == 0 || j == 9) continue;

                block.className += " black";
            }
            /* else block.className += " white"; */
        }
    }
}

createDesk()
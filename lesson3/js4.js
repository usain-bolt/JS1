/**
*Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:
* @param {number} rows Количество рядов, которое нужно вывести +1
* @param {number} row - текущий ряд заполнение
*/

let row = 0; // 

function paintPyramid(rows){ // 20 //19
	++row; //1 // 2
	if (rows == 1)
        return;
    let array = [];
	for (let i = 0; i < row; i++){ // 0;1;0
		array.push("X")
    }
	console.log(array.join(""));
	paintPyramid(rows - 1); // 19
}

paintPyramid(21);
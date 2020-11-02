/**
 * 
 * 2. Для игры, реализованной на уроке, 
 * добавить возможность вывода хода номер n (номер задается пользователем)
 */

var event, ok;
var answers = [];
let answerSave = true;
const exit = " Нажмите -1 для выхода из игры";

function Answer(text, answer){
    this.text = text;
    this.anwer = answer;
}

function screenView(text, countAnswer){
    do{
        ok = false;
        event = +prompt(text + exit);
        //alert("Значение переменной event " + event);
        if (event == -1){
            break;
        }
        else {
            ok = isAnswer(countAnswer, event)
            //alert("Проверка переменной event на допустимость " + event);
        }
    }
    while (!ok);
    if (answerSave){
        var answer = new Answer(text, event);
        answers.push(answer);
        //alert("Содержание массива answers  " + answers);
    }
}

screenView(works.a00 + works.a1 + works.a2, works.a0);
alert("event равнен " + event);
switch (event){
    case 1: screenView(works.b00 + works.b1 + works.b2, works.b0);
    switch (event){
        case 1:
        case 2:
            screenView(works.d00 + works.d1 + works.d2, works.d0);
            break;
        case -1: break;
        default: alert("Ошибка");
        }
        break;
    case 2: screenView(works.c00 + works.c1 + works.c2, works.c0);
    switch(event){
        case 1:
        case 2:
            screenView(works.d00 + works.d1 + works.d2, works.d0);
            break;
        case -1: break;
        default: alert("Ошибка");
    }
}

alert('Спасибо за игру');

answerSave = false;

do{
    screenView("Хотите посмотреть историю? \n Введите номер хода из "+ answers.length + " " + exit, answers.length)

    if (event != -1){
        alert(answers[event -1].text + " \n Вы выбрали ответ: " + answers[event -1].answer)
    }
}
while(event != -1)

function isAnswer(q, event) {
    if (isNaN(event) || !isFinite(event)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (event < 1 || event > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    //alert("Проверка на диапапзон");
	return true;
}

alert(answers);



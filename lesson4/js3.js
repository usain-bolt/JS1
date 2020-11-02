/**
 * @description 3. *На базе игры, созданной на уроке, реализовать игру «Кто хочет стать миллионером?»
 * 
 */

 let sumUser = 0; // Сумма игрока
 let userAnswer;
 let flag = true; //  Продолжаем играть

 const questAns = [
     {
        question: "Кто из этих философов в 1864 году написал музыку на стихи А.С. Пушкина «Заклинание» и «Зимний вечер»?",
        answer1: "Юнг",
        answer2: "Гегель",
        answer3: "Ницше",
        answer4: "Шопенгауэр",
        rightAnswer: "Ницше"
     },
     {
        question: "Сколько раз в сутки подзаводят куранты Спасской башни Кремля?",
        answer1: "1",
        answer2: "2",
        answer3: "3",
        answer4: "4",
        rightAnswer: "2"
     },
     {
        question: "Кто 1-м получил Нобелевскую премию по литературе?",
        answer1: "Романист",
        answer2: "Драматург",
        answer3: "Поэт",
        answer4: "Эссеист",
        rightAnswer: "Поэт"
     }
 ]

function whoWantsTo(i){
   console.log("Вопрос №" + (i+1));
   console.log(questAns[i].question + "/n" + questAns[i].answer1 + "/n" + questAns[i].answer2 + "/n" + questAns[i].answer3 + "/n" + questAns[i].answer4);

   userAnswer = prompt("Наберите ответ " + "-1 - забрать деньги", "Ответ");

   if(userAnswer == -1){
      flag = false;
      console.log("Ваш выйгрыш составил " + sumUser);
      console.log("Спасибо за игру!")
      return;
   }

   else if (userAnswer == questAns[i].rightAnswer){
      console.log("Вы ответили правильно!")
      sumUser +=100;
      console.log("Ваш выйгрыш составил " + sumUser);
   }

   else{
      console.log("Ваш ответ не верный. /n" + "Правильный ответ был "+ questAns[i].rightAnswer);
      sumUser = 0;
      flag = false;
      console.log("Ваш выйгрыш составил " + sumUser);
   }
   console.log("------------------")
 }

for(let i = 0; i < questAns.length; i++){
   if (!flag){
      break;
   }
   whoWantsTo(i);
}
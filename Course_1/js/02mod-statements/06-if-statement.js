/* 
Кратко:
условный оператор - оператор, который содержит код, выполняемые при определённом условии
*/

/*
Переводы слов с англ.:
if - если
else - иначе
ternary - троичный
salary - заработная плата :)
*/

let salary = 30000;

if (salary < 75000) {
  console.log("Учиться!");
} else {
  console.log("Работать");
}

//тернарный оператор
let res = salary < 75000 ? "Учиться!" : "Работать";
console.log(res);

console.clear()

// Есть переменная isStudiesProgramming=true. При помощи условного
// оператора if, проверить является ли истинным значение isStudiesProgramming
// и вывести строку "Я программирую на JS!", или вывести "Я не программист" ((
   {
      let isStudiesProgramming = true;
      if (isStudiesProgramming == true){
         console.log("Я программирую на JS!")
      } else {
         console.log("Я не программист")
      }
   }

// Есть переменная color='red'. При помощи if определить, 
//является ли значение переменной равной 'red' и, если является,
// вывести слово "красный", а иначе "не красный"
{
   let color = 'red';
   if (color === 'red'){
      console.log("Красный")
   } else {
      console.log("Не красный")
   }
}

//Тернарным оператором
{
   let color = 'red';
   console.log(color === 'red' ? "Красный" : "Не красный")
}

// Есть переменные m, h с произвольными значениями. 
// Найти индекс массы тела  I и вывести фразу "спортзал ждёт нас" 
// или "съешь булок"

//* !с окном ввода { let m = prompt ('Введите массу', ''); let h = prompt ('Введите рост', '');console.log(m,h);} *//

{
   let m = Math.round(Math.random() * 100 + 50); //с округл до целого в большую
   let h = Math.random() * 1.4 + 2.2;
   let I = 0;
   I = m / h ** 2;
   if (I < 18.5){
      console.log(I ,"съешь булок");
   }
   if (I > 25){
      console.log(I ,"спортзал ждёт нас");
   }
}

// Представьте что создаёте игру и в переменную direction помещается 
// буква определяющая направление (или ее код). В зависимости от значения
// переменной direction выведите строкой название направления. Например:
// "w" или 119 - "вверх" 
// "a" или 97  - "влево" 
// "s" или 115 - "вправо" 
// "d" или 100 - "вниз" 

{
   let array = ['w', 'a', 's', 'd'];
   function randomX() {
      const min = Math.ceil(0);
      const max = Math.floor(3);
      return Math.floor(Math.random() * (max - min)) + min;
   } //ф-ция для рандома по кол-ву ячеек массива
   let direction = array[randomX()]; //реализация выбора рандомной ячейки массива
      
   if (direction === 'w'){
      direction = 119, console.log("Вверх");
   }
   if (direction === 'a'){
      direction = 97, console.log("Влево");
   }
   if (direction === 's'){
      direction = 115, console.log("Вправо");
   }
   if (direction === 'd'){
      direction = 100, console.log("Вниз");
   }
}      
   

// "use strict"
/*
Кратко
функция-конструктор - это функция, которая вызывается с оператором new и при этом получается новый объект
*/

/*
Переводы слов с англ.:
constructor - конструктор
prototype - прототип
new - новый
*/

function Cat(name, age) {
  this.name = name;
  this.age = age;
}
Cat.prototype.meow = function () {
  return 'Мяу';
}

let cat1 = new Cat('Барсик', 2);
let cat2 = new Cat('Мурзик', 3);
console.log(cat1, cat2);

cat1.meow = function () {
  return 'Мау';
}
console.log(cat1.eat());
console.log(cat2.eat());


// Откройте консоль (браузера или Node.js). Наберите Array.prototype.
// и изучите доступные для работы методы массивов



// Напишите свой конструктор ElementInput, который принимает тип
// HTML-элемента, его начальные значения name и value, атрибуты 
// disabled, autofocus, required
// В прототипе конструктора опишите метод render, который возвращает
// строчное представление HTML
// Например, 
// let attrs = {
//   name: 'rule',
//   value: 'yes',
//   disabled: false,
//   autofocus: false,
//   required: true
// }
// let input = new ElementInput('checkbox', attrs)
// console.log( input.render() ); //<input type="checkbox" name="rule" value="yes" required >



// Создайте свой произвольный конструктор и объект на его основе

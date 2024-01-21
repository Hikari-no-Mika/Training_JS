/*
Кратко:
объекты - тип данных, позволяющий объединять переменные и функции для их обработки
свойство объекта - переменная любого типа, описанная в объекте (является частью объекта)
метод объекта - функциональное свойство объекта
деструктуризация - получение свойств объекта в новые одноимённые переменные 
*/

/*
Переводы слов с англ.:
object - объект
property - свойство
method - функция, метод объекта
in - в
*/
let cat1 = {name: "Барсик", color: "red"};

// оператор in проверяет наличие свойства в объекте
console.log('color' in cat1); //true
console.log('weight' in cat1); //false

// оператор for/in проходит по всем свойствам
for (let p in cat1) {
    if (typeof cat1[p] != "function") console.log(p, typeof p, cat1[p]);
}

// деструктуризация 
const {name, color} = cat1
console.log(name, color)

cat1.age = 9;
cat1["txt"] = "мяу";
cat1.meow = function () {
    return "мяу";
};

console.log(cat1["age"]);
console.log(cat1.txt);
console.log(typeof cat1);

let property = "color";
console.log(cat1[property]);
console.log(cat1.meow); //смотрим тело метода
console.log(cat1.meow()); //вызов метода/функц. св-ва

// Создайте собственный произвольный объект 
// с двумя свойствами простых типов и одним методом (функциональным св-вом)
// Вызовите метод вашего объекта
{
    let car = {
        name: 'Subaru',
        country: 'Japan',
        power: 168,
        modification: 'outback',
        getModification() {
            return this.modification; //THIS -это ссылка на контекст вызова или объект вызова - кто метод вызывает на того и ссылка THIS указывает
        }
    }
    let phone = {
        name: 'Xiaomi',
        modification: '13',
        getModification: car.getModification
    }
    //console.log(car.getModification());
    console.log(phone.getModification());
}

//ПРИМЕР
{
    function changeColor(color) {
        this.color = color; //на этих 2х строках this не вызывается значит нельзя сказать на что указывает пока код тут заканчивался
    }

//window.changeColor('красный'); воспринимается глобально так со строкой ниже
    changeColor('красный');
}
//ПРИМЕР

let cat = {
    name: 'Барсик',
    changeColor: changeColor, //ссылка на ф-цию function changeColor('color')
}
cat.changeColor('серый'); //барсик стал серый тк тут вызов ф-ции от cat
console.log(cat);

// Создайте объект course (учебный курс) со свойствами
// title - название курса в виде строки "JavaScript"
// duration - продолжительность курса в виде числа 24
// Выведите значение свойств объекта [в консоль].
// Например:
// "JavaScript"
// 24


// Есть переменная recipe (рецепт) в виде объекта
// let recipe = {
//   name:"хлеб",
//   cooktime:"180мин",
//   ingredient: "мука, дрожжи, тёплая вода"
// }
// При помощи деструктуризации, получите в новые 
// переменные name, cooktime и ingredient значения
// свойств объекта recipe


// Есть переменные firstName='Иван' и lastName='Иванов'
// Создайте переменную user в виде объекта со свойствами
// firstName и lastName и значениями одноименных переменных


// Напишите функцию generateColor(red, green, blue), которая
// принимает три числа для каждого компонена цвета и возвращает
// объект со свойствами red, green, blue
// Например:
// console.log( generateColor(115, 81, 132) );
// {red: 115, green: 81, blue: 132}


// Напишите функцию classNames(), которая принимает неограниченное
// количество строковых аргументов, а выводит склеенную из них строку
// без повторяющихся слов. Примечание: делайте строки св-ми объекта,
// тогда они не будут дублироваться
// Например:
// console.log(classNames('foo','foo','some')); //'foo some'



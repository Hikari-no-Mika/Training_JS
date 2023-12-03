/*
Кратко:
прототипное наследование - вид наследования использумый в JS, когда расширяющие конструкторы
ищут методы по цепочке прототипов
*/

// Супер-класс (базовый класс) кот Cat
function Cat(name, age){
  this.name = name;
  this.age  = age;
}
Cat.prototype.meow = function(){
    return 'Мяу';
}


// Расширяющий конструктор (наследник)
function RussianBlueCat(name, age, color = 'grey'){
  Cat.apply(this,[name, age]);//вызов родительского констр.
  this.color = color;
}
RussianBlueCat.prototype = new Cat();
RussianBlueCat.prototype.constructor = RussianBlueCat;


//Классика прототипного наследования:
// 1. применяем родительский конструктор 
// 2. помещаем в прототип объект с методами
// 3. меняем конструктор прототипа наследника


let cat1 = new Cat('Барсик', 2);
let cat2 = new RussianBlueCat('Медведь', 3);
let cat3 = new RussianBlueCat('Август', 5);

console.log(cat1,cat2);
console.log(cat1.constructor); //Cat
console.log(cat2.constructor); //RussianBlueCat

console.log(cat2.meow());


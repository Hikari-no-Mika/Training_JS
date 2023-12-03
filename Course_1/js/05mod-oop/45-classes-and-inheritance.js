/*
Кратко
классы  - шаблон кода для создания объектов (синтаксический сахар для
реализации прототипного наследования)
псевдопеременная super ссылается на родительский класс
*/

/*
Переводы слов с англ.:
classes - классы
extends - расширяет
instanceof - случай, экземпляр..
*/


class Cat{
  constructor(name, age){
    this.name = name;
    this.age  = age;  
  }
  meow(){
    return 'Мяу';
  }
}
class RussianBlueCat extends Cat{
  constructor(name, age, color = 'серый'){
    super(name, age);
    this.color = color;
  }  
}
let cat1 = new Cat('Барсик', 2);
let cat2 = new RussianBlueCat('Медведь', 3);
console.log(cat1, cat1.meow());
console.log(cat2, cat2.meow());

console.log(cat1 instanceof Cat);
console.log(cat2 instanceof RussianBlueCat);
console.log(cat2 instanceof Cat);
console.log(cat1 instanceof RussianBlueCat);
console.log(cat1 instanceof Object);

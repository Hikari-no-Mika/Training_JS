/*
Кратко:
toString - метод объектов, срабатывающий при попытке превращения объекта в строку
Это бывает при работе на HTML-странице или при выполнении склейки объекта со строкой
*/

/*
Переводы слов с англ.:
to string  - к строке
*/

let cat1 = {
  name: "Барсик",
  color: "red",
  age: 9,
  txt: "мяу",
  meow: function () {
    return this.txt;
  },
  // toString: function(){
  //   return this.name;
  // }
};
console.log("Привет, " + cat1);
console.log(cat1 + "");

// Есть объект book. Опишите функциональное свойство toString(),
// которое при попытке превращения объекта в строку вернет "Книга1|1000"
// const book = {title: 'Книга1', price: 1000}
// console.log(book+''); //"Книга1|1000"
// console.log(book.toString()); //"Книга1|1000"

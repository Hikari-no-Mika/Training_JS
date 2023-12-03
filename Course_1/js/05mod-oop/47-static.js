/*
Кратко: 
статический метод - метод который вызывается у класса, а не у экземпляра(объекта) класса
*/

/*
Переводы слов с англ.:
static - статический
*/

class Book{
  constructor(title, authors){
    this.title = title;
    this.authors  = authors;  
  }
}

class GoodsFabric{
  static create( goodsClassName, ...params){
    switch(goodsClassName){
      case 'Book': return new Book(...params);
    }
  }
}


// Создайте класс Math2 с статическим методом isOdd(n)
// Метод должен возвращать true, если переданный аргумент - нечётное число
// Например:
// console.log( Math2.isOdd( 12 ) ); //false
// console.log( Math2.isOdd( 7 ) ); //true





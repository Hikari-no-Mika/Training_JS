/* Создать базовый класс Goods со свойствами _title, _price; 
 методом show() - показывающим св-ва объекта
 Создать экземпляр объекта (new Goods(...)) */
class Goods {
  constructor(title, price) {
    this._title = title;
    this._price = price;
  }
  show() {
    let result = "";
    for (let p in this) result += `${p} = ${this[p]}\n`;
    return result;
  }
}

/* Создать класс наследник Phone со свойством _type и значением "смартфон" и переопределить конструктор Goods */
class Phone extends Goods {
  constructor(title, price) {
    super(title, price);
    this._type = "смартфон";
  }
}

let goods = [new Goods("JavaScript", 900), new Phone("Nokia 3100", 900)];
goods.forEach((item) => {
  console.log(item.show());
});

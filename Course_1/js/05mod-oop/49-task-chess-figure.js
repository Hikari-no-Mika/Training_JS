/*
Создать суперкласс (базовый) Figure со свойствами name, color, coords (типа F3), info() - выводит информацию и фигуре
*/
class Figure{
    #coords;
    constructor(name, color, coords){
      this.name = name;
      this.color = color;
      this.#coords = coords;
    }
    info(){
      console.log(this.name);
      console.log(this.color);
      console.log(this.#coords);
    }
  }
  
  /*Создать класс  Bishop наследник Figure, у которого будет доп. свойство rang (стоимость фигуры), и переопределенный метод info()
  Создать аксессоры x и y, так, чтобы менялось свойство coords*/
  class Bishop extends Figure{
    #coords = [];
    constructor(name, color, coords){
      super(name, color, coords);
      this.rang = 3;
      this.#coords = coords
    }
  
    info(){
      super.info();
      console.log(this.rang);
      console.log(this.#coords);
    }
  
    get x(){
      return this.#coords[0]
    }
    get y(){
      return this.#coords[1]
    }
    set x(value){
      return this.#coords[0] = value
    }
    set y(value){
      if(
         value == 'A' ||
         value == 'B' ||
         value == 'C' ||
         value == 'D' ||
         value == 'E' ||
         value == 'F' ||
         value == 'G' ||
         value == 'H' 
         ){
      this.#coords[1] = value   
      }
    }
  
  }
  
  /*
  Создать отдельный класс Chess, с статическим методом create(), который принимает данные и возвращает экземпляр шахматной фигуры
  */
  class Chess {
    static create(type, color, coords){
      switch(type){
        case 'Bishop': return new Bishop('Bishop',color, coords);
        case 'Rooks': return new Rooks('Rooks',color, coords);
      }
    }
  }
  
  let figures = [];
  
  figures.push( Chess.create('Bishop', 'white', [3, 'F']) );
  figures[0].x = 4;
  figures[0].y = 'Z';
  
  figures.forEach(
    figure => figure.info()
  );
/*
Написать классы описывающие фруктовый сад с яблонями и грушами, каждое из которых возвращает урожай плодов

FruitTree - дерево (id дерева, возраст, высота, вероятность плодоношения, вес плода, сорт, кол-во плодов, giveHarvest() - возврат урожая )
AppleTree - яблоня (диаметр яблока)
PearTree - груша (высота плода)
Garden - сад (
  add(FruitTree) - добавить дерево
  remove(idtree) - удалить дерево
  giveHarvest() - вернуть урожай по всем деревьям
). Сад должен хранить набор деревьев либо в массиве, либо в объекте
*/

class FruitTree {
  constructor(
      idtree,
      age,
      height,
  ) {
      this.idtree = idtree;
      this.type = '';
      this.age = age;
      this.height = height;
      this.probabilityOfFruiting = null;
      this.weight = null;
      this.quantity = 0;
  }
  giveHarvest() {
      const {
          probabilityOfFruiting,
          weight,
          quantity
      } = this;

      return probabilityOfFruiting * weight * quantity
  }
}

class AppleTree extends FruitTree {
  constructor(idtree, age, height, type, diameter) {
      super(idtree, age, height)
      this.diameter = diameter
      this.type = type;
      this.probabilityOfFruiting = .33;
      this.weight = Math.random()*(300-100)+100;
      this.quantity = Math.floor(Math.random()*1000);
  }
}
class PearTree extends FruitTree {
  constructor(idtree, age, height, type, heightFruit) {
      super(idtree, age, height)
      this.heightFruit = heightFruit
      this.type = type;
      this.probabilityOfFruiting = .23;
      this.weight = Math.random()*(200-100)+100;
      this.quantity = Math.floor(Math.random()*300);
  }
}

class Garden{
 #trees = {};
 
 add(tree){
   this.#trees[tree.idtree] = tree;
 }

 remove(idtree){
   delete this.#trees[idtree];
 }
 
 giveHarvest(){
   let result = 0;

   for(let idtree in this.#trees){
      result += this.#trees[idtree].giveHarvest();
   }   

   return result;
 }
}

const garden1 = new Garden();
garden1.add( new AppleTree('123', 1, 2, 'Антоновка', 10) );
garden1.add( new AppleTree('12B', 1, 2, 'Антоновка', 10) );
garden1.add( new AppleTree('12Q', 1, 2, 'Антоновка', 10) );
garden1.add( new AppleTree('12N', 1, 2, 'Антоновка', 10) );
garden1.add( new PearTree('12C', 2, 2.4, 'Дюшес', 15) );
garden1.add( {giveHarvest(){return '100'}} );
console.log(garden1.giveHarvest())
/*
apple, call, bind - методы объектов-функций, для изменения указания псевдопеременной this

Переводы слов с англ.:
apply - применять
call - вызвать
bind - связывать
binding - связывание
*/


let cat1 = {
  name:'Мурзик', 
  age: 9 
};
function addYear(){
  this.age++;
}
addYear.apply(cat1);
addYear.call(cat1);
console.log(cat1);


function changeColor( c ){
  this.color = c;
}
changeColor.apply(cat1, ['orange']);
changeColor.call(cat1, 'white');

const changeColorCat1 = changeColor.bind(cat1)

changeColorCat1('lime');

addYear.apply(cat1);
addYear.call(cat1);
console.log(cat1);
















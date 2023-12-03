/*
switch в зависимости от входной переменной позволяет выбрать один из случаев выполнения кода

Переводы слов с англ.:
switch - переключатель
case - случай
break - разрыв/обрыв
default - по молчанию
*/

let day = 3, menu = '';

switch (day) {
  case 0: menu = 'борщ'; break;
  case 1: menu = 'щи'; break;
  case 2: menu = 'солянка'; break;
  case 3: menu = 'харчо'; break;
  case 4: menu = 'шашлык'; break;
  case 5: menu = 'оливье'; break;
  default: menu = 'овощной салат';
}
console.log(day, menu);


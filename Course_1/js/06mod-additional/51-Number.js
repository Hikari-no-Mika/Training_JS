/*
Кратко:
Number - функция-конструктор, встроенный объект для работы с числами
хранит полезные свойства и методы, касающиеся числового типа данных
*/

let t = 36.634;
console.log(Number, typeof Number);
console.log(new Number(23));

console.log(t.toFixed(1));//строка '36.6';
console.log( Number.MAX_VALUE );
console.log( Number.MIN_VALUE );
console.log( Number.NaN );
console.log( 5 / 0, Number.isFinite(5 / 0) );
console.log( isFinite(5 / 0) );
console.log( NaN == NaN, isNaN(NaN) );

let s = '36.6кг';
console.log( parseInt(s) );
console.log( parseFloat(s) );

console.log( parseInt('ffffff',16) );
console.log( parseInt('fffffz',36) );

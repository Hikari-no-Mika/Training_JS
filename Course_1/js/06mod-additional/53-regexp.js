/*
Кратко:
регулярные выражения - язык шаблонов для обработки строк
используется в CSS, JavaScript, Python, PHP, SQL и т.д.
*/

/*
Переводы слов с англ.:
regular expresstion - регулярные выражения
*/

let re0 = new RegExp('ре','gi');
let re1 = /ре/gi; 
console.log('Ехал ГРЕКА через реку'.replace(re1, 'ле'));


// Напишите регулярное выражение re3, которое будет проверять
// корректность даты в формате ДД.ММ.ГГГГ. ДД - число месяца
// двумя знаками, ММ - месяц двумя знаками, ГГГГ - год. 
// Договоримся, что будем проверять года в диапазоне 2000-2999 
let re3 = / /;

console.log(re3.test('12.12.2025'));
console.log(re3.test('12.12.2029'));
console.log(re3.test('12.12.20251'));
console.log(re3.test('112.12.2025'));
console.log(re3.test('2.12.2025'));
console.log(re3.test('2.2.2025'));
console.log(re3.test('2.02.2025'));
console.log(re3.test('2.02s2025'));
console.log(re3.test('12.2025'));
console.log(re3.test('39.12.2025'));
console.log(re3.test('12.34.2025'));


// let re4 = /[\.\/]/
// console.log('02.04/2022.'.split(re4)); //[]

// let re4 = /(\d{4})#(\d{2})#(\d{2})/;
// const dt = '2022#02#04';
// console.log( dt.replace(re4, '$2.$3.$1') );
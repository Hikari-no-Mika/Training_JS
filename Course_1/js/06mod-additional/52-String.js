/*
Кратко:
String - функция-конструктор, встроенный объект для работы со строками
в прототипе конструктора String сосредоточено большое количество строковых методов
*/

const s = 'молоко';

// показывает длину строки в символах, но по-особому считает многобайтные символы
console.log(s.length); //6

// функция для "ленивых" - выводит данные в консоль
const log = (...a)=>{ console.log(...a); };

log( s.charAt(1) );//о - показывает символ под индексом 1
log( s[1] );//о

log('🇷🇺');
log('🇷🇺'[0]);
log('🇷🇺'[1]);
log('🇷🇺'[2]);
log('🇷🇺'[3]);

log( 'о'.charCodeAt(0) );//1086

log( '🇷🇺'.charCodeAt(0) );//55356
log( '🇷🇺'.charCodeAt(1) );//56823
log( '🇷🇺'.charCodeAt(2) );//55356
log( '🇷🇺'.charCodeAt(3) );//56826

log( s.indexOf('о') );//1
log( s.indexOf('о',2) );//3
log( s.lastIndexOf('о') );//5
log( s.lastIndexOf('о',4) );//3

log( s.startsWith('о') );//false
log( s.endsWith('о') );//true
log( s.includes('о') );//true

// console.clear();
log( s.concat('воз') );//молоковоз
log( s );

log( s.split(' ') );
log( s.split('') );
log( s.split('о') );

// console.clear();
log( s[1] ); //о
log( s.slice(1) ); //олоко
log( s.slice(1,3) ); //ол

log( s.replace('о','а') ); //малоко
log( s.replace(/о/gi,'ю') ); //мюлюкю

'Ехал Грека через реку'
    .replaceAll('ре','РЕ');

log( 'Молоко'.toLowerCase() ); //молоко
log( 'Молоко'.toUpperCase() ); //МОЛОКО

log( s.repeat(5) ); //молокомолокомолокомолокомолоко
log( s.trim() );
' слово  '.trimStart();
' слово  '.trimEnd();
log( `   ${s}     `.trim() );


// Есть строки
// - s0 со значением 'Ехал Грека через реку'
// - s1 со значением 'ре'
// - s2 со значением 'ле'
// Написать функцию replace(s0, s1, s2), которая принимает эти строки 
// и возвращает строку с замененными подстроками, то есть 'Ехал Глека челез леку'
// Например:
// let s0 = 'Ехал Грека через реку';
// let s1 = 'ре';
// let s2 = 'ле';
// const replace = (s0, s1, s2) => { }
// console.log(replace(s0, s1, s2)); //'Ехал Глека челез леку'



// Создать функцию substrCount(needle,haystack,offset,length) 
// которая находит количество вхождений строки needle в
// строку haystack, со смещением offset на длине length 
// Например: 
// let num = substrCount("ре","Ехал Грека через реку",5,15); // 3
// console.log(num);//3


﻿/*
цикл - инструкция для многократного выполнения блока
for - цикл с трёмя необязательными выражениями в круглых скобках, разделённые точками с запятыми

Переводы слов с англ.:
for - для
break - разрыв
continue - продолжать
*/

for (let i = 0; i < 5; i++) {
    console.log("Зад_1", i);
}
let i = 100500;
console.log("Зад_1", i);

for (let i = 0; i < 5; i++) {

    if (i == 3) {
        break;
    }

    if (i == 1) {
        continue;
    }
    console.log("Зад_1", i);
}

//Создайте строку из HTML-тегов <select> и <option> так, чтобы было 10 опций
{
    let select = '<select name="param">\n';
    for (let d = 1; d <= 10; ++d) {
        select += `\t<option>${d}</option>\n`;
    }
    select += '</select>';
    console.log("Зад_2", select);
    document.write(select);
}

//Дана константа LEVEL=5. Написать цикл, который выводит из символов звездочки ёлку с количеством уровней LEVEL
{
    const LEVEL = 5;
    let tree = '';
    let chars = '**';
    for (let i = 0; i < LEVEL; i++) {
        tree += '*';
        for (let j = 0; j < i; j++) {
            tree += chars;
        }
        tree += '\n';
    }
    console.log("Зад_3", tree)
}

// Используя for выведите все числа от 1 до 20
{
    let n = 0;
    for (let i = 1; i <= 20; i++) {
        n += 1;
        console.log("Зад_4", n);
    }
}

// Выведите все нечётные числа от 1 до 20
{
    let n = 0;
    for (let i = 1; i <= 20; i++) {
        n += 1;
        if (n % 2 !== 0) { //Проверка чётности числа с помощью оператора получения остатка от деления % на 2.
            console.log("Зад_5", n);
        }
    }
}

// Выведите квадраты всех чисел от 1 до 20 
{
    let n = 0;
    for (let i = 1; i <= 20; i++) {
        n += 1;
        console.log("Зад_6", Math.sqrt(n).toFixed(3)); //.toFixed()-ограничение точек после запятой
    }
}

// Дана константа STR='Ехал Грека'. Напишите цикл, который выведет
// отдельно каждую букву этой строки и её индекс расположения в строке
// Например:
// Е, 0
// х, 1
// а, 2
// л, 3
//  , 4
// Г, 5
// р, 6
// е, 7
// к, 8
// а, 9
{
    const STR = 'Ехал Грека';
    for (let i = 0; i < STR.length; i++) {
        console.log("Зад_7", STR[i], ",", i);
    }
}

// Известно, что Math.random() возвращает число в диапазоне от 0 до 1 (не включая единицу)
// Вывести десять случайных чисел. Например, 
// 0.12310376400982315
// 0.4122515946229255
// 0.91650064130427
// 0.26730856647292733
// 0.4591314622528586
// 0.00942280309100374
// 0.634001235328409
// 0.3958539690112308
// 0.6947091178797062
// 0.030207851532414454
{
    let n = '';
    for (let i = 1; i <= 10; i++) {
        n = Math.random();
        console.log("Зад_8", n);
    }
}

// Вывести десять строк, в каждой из которых должно быть размещено случайно
// одно из слов: "камень", "ножницы", "бумага". Используйте также if или switch
// Например:
// 'камень'
// 'ножницы'
// 'бумага'
// 'камень'
// 'ножницы'
// 'бумага'
// 'камень'
// 'бумага'
// 'камень'
// 'бумага'
{
    const arr = ["камень", "ножницы", "бумага"];
    let pick = '';
    for (let i = 0; i <= 10; i++) {
        pick = Math.floor(Math.random() * arr.length);
        console.log("Зад_9", arr[pick]);
    }//почему-то выводит не 10 строк, а между 6 и 8
}

// Посчитайте количество звёздочек (символов '*') в строковой 
// переменной str='%:;%:?"*?*№?;:"РПВА'. 
// Убедитесь, что в данной строке две звёздочки


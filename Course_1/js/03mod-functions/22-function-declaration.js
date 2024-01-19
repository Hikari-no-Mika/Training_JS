﻿/*
Кратко:
 функции - (это объекты Function и они всегда возвращают значение) используются для повторного использования кода
 название формируется по правилам формирования переменных
 return возвращает из функции значения
 после выполнения return дальнейший код функции не выполняется
*/

/*
 Переводы слов с англ.:
 return - вернуть
 call - вызов
 arguments - аргументы - это Параметры вызова функции
 expression - выражение
 callback functions - функции обратного вызова
 recursion - рекурсия
 closures - замыкания
 arrow function - стрелочная функция
 anonymous function - анонимная функция (это если Имя функции не указано) --> (param1, param2, …, paramN) => { statements }
 scope - область видимости
*/

function hello(name = "гость", age = 25) {
    console.log(`Привет, ${name} ${age}`); //Шаблонные литералы заключены в обратные кавычки (` `). Они могут содержать подстановки, обозначаемые знаком доллара и фигурными скобками (${выражение}).
    return age;
}

console.log("------Пример------");
hello("Василий", 45); //45
hello("John"); //25
hello(); //25
console.log("------Пример------");

// Напишите функцию sum(), которая будет складывать два числа.
// Например, вызов sum(2,6) должен вернуть 8
// console.log(sum(2, 6)); // 8
// console.log(sum(2, 10)); // 12
{
    const x = function (a, b) { //функция-выражение
        return a + b;
    }

    console.log('#_2', x(5, 4));
}

// Напишите функцию getRPC() для игры в "Камень-ножницы-бумага".
// При каждом вызове функция случайно возвращает один из символов
// 👊 - камень
// ✌ - ножницы
// ✋ - бумага
// Например:
// console.log( getRPC() ); //👊
// console.log( getRPC() ); //✋

{
    function getRPC(a, b, c) {
        let x = Math.floor(Math.random() * getRPC.length);
        if (x == 0) {
            return '👊';
        } else if (x == 1) {
            return '✌';
        } else if (x == 2) {
            return '✋';
        }
    }

    console.log('#_3', getRPC());
}

// Напишите функцию reverse(), которая будет принимать строку, а
// возвращать перевернутую.
// Например:
// console.log(reverse('JavaScript') ); //'tpircSavaJ'

{
    function reverse(str) {
        let x = "";//Создаем строковую переменную, в которую будет помещен результат
        for (let i = str.length - 1; i >= 0; i--) { //Начальной точкой цикла будет (str.length - 1), что соответствует последнему символу в строке, т.е. Пока i больше или равна 0, цикл будет продолжать работать, уменьшая счетчик на каждой итерации
            x += str[i];
        }
        return x
    }

    console.log('#_4', reverse('JavaScript'));
}

// 🟡 Напишите функцию getNumberOfCoins(sum), которая принимает некоторую
// денежную сумму, а возвращает монеты, из которых эта сумма может состоять
// Количество монет должно быть минимально. Монеты могут быть 10, 5, 2 и 1 рубль
// Например:
// console.log( getNumberOfCoins(23) );  //'10,10,2,1'


{

    let m = [10, 5, 2, 1];
    let res = [];

    function getNumberOfCoins(sum) {
        for (let i = 0; i <= m.length; i++) {

            while (sum - m[i] >= 0) {
                sum = sum - m[i];
                res.push(m[i]); //запись ячейки m[i] в конец массива res
            }

        }
        return res;
    }


    console.log('#_5', getNumberOfCoins(23));  //'10,10,2,1'
}

// Напишите функцию fizzbuzz(n), она принимает положительное целое число.
// Функция должна вывести числа от 0 до n, но
// - если число кратно 3, то выводить 'fizz'
// - если число кратно 5, то выводить 'buzz'
// - если одновременно кратно 3 и 5, то 'fizzbuzz'

// Напишите функцию getNumberOfVowels(str) - она должна возвращать количество
// гласных находящихся в строке str (договоримся считать русские гласные)

// Напишите функцию isPrimeNumber(n) - она принимает положительно целое, и
// возвращает true, если число является простым. Иначе функция возвращает false

// Напишите функцию getPassword(n), которая генерирует пароль.
// Длина пароля должны быть n - символов. Нужно использовать
// коды символов от 36 до 126

// Напишите функцию iterator(fn, n = 1), которая принимает другую
// функцию и количество повторений n, а затем вызывает fn - n раз
// Например:
// function myfunction(){ console.log('Ура') }
// console.log( iterator( myfunction, 5 ) )
// 'Ура'
// 'Ура'
// 'Ура'
// 'Ура'
// 'Ура'

// Дана строка, состоящая из букв A-Z:
// "AAAABBBCCXYZDDDDEEEFFFAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBB"
// Нужно написать функцию RLE, которая на выходе даст строку вида:
// "A4B3C2XYZD4E3F3A6B28"
// Пояснение:
// 1. если символ встречается 1 раз, он остается без изменений
// 2. если символ повторяется более 1 раза, к нему добавляется количество повторений

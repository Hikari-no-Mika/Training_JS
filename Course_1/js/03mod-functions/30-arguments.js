/*
Кратко:
иногда бывает нужно создать функцию, с заранее неизвестным кол-вом числом аргументов:
- нахождение суммы набора чисел
- склейка набора строк
- нахождение арифметического среднего
- установка/получение данных для диаграммы
*/

/*
Перевод:
arguments - аргументы
rest - другие, остальные
length - длина
*/

// Пример старого кода с arguments
// function sum() {
//   let s = 0;
//   let len = arguments.length;

//   for (let i = 0; i < len; i++) {
//     s += arguments[i];
//   }

//   return s;
// }
// //               0  1  2  3
// console.log(sum(10, 5, 9, 2)); //26

// Пример кода с rest-оператором (...)
{
    function sum(...args) {
        let s = 0;
        let len = args.length;

        for (let i = 0; i < len; i++) {
            s += args[i];
        }

        return s;
    }

//                  0  1  2  3
    console.log(sum(10, 5, 9, 2)); //26
}

// Создайте функцию avg(), которая найдет среднее арифметическое по всем своим аргументам
// Например,
// avg(3, 7, 20); //10
// avg(100, 100, 400); //200
{
    function avg(...args) {
//return sum(...args) / args.length; // (быстрый способ = сумма аргументов/кол-во=среднее)
        const len = args.length;
        let summa = 0;
        for (let i = 0; i < len; i++) {
            summa += args[i];
        }
        return summa / len;
    }

    console.log(avg(9, 9, 6, 6)); //7,5
}

// Создайте функцию graph(), которая построит в консоли график из звездочек
// Например,
// graph(4,7,10,5,1)
// ****
// *******
// **********
// *****
// *
{
    function graph(...args) {
        const len = args.length;
        let x = '';
        for (let i = 0; i < len; i++) {
            x += '*'.repeat(args[i]) + '\n'; // '*'.repeat(args[i]) -функция, которая значит повторить '*' столько раз
            // "args[i]"
        }
        return x;
    }

    console.log('%c' + graph(4, 7, 10, 5, 1), 'color:violet'); //в вывод добавлено CSS-свойство с цветом - методом '%c' + (то,что треб вывести), 'color:violet'
}
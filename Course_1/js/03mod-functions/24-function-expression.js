// Пример создания функции сложения двух чисел
// Функция описывается как функция-выражение

let sum = function (n, m) {
  return n + m;
};
console.log(sum(2, 3)); //5
console.log(sum);

// Функция является особым объектом
// Можно копировать ссылку на функцию
let sum2 = sum;
console.log(sum2(2, 3)); //5
console.log(typeof sum); //'function'

/** Принимает функцию и выполняет её с двумя аргументами
 * @param {function} fn - произвольная функция принимающая два аргумента
 * @param {number} a - первый числовой параметр для fn
 * @param {number} b - второй числовой параметр для fn
 * @returns {number}
 */
function operation(fn, a, b) {
  if (typeof fn != "function") return false;
  return fn(a, b);
}

console.log(operation(sum, 2, 3));
console.log(
  operation(
    function (n, m) {
      return Math.pow(n, m);
    },
    2,
    3
  )
);

//анонимную функцию
console.log(
  (function (n, m) {
    return Math.pow(n, m);
  })(3, 5)
);


// Напишите функцию rand(), которая возвращает случайное целое число от 0 до 100
// Используйте встроенную функцию Math.random() - она возвращает числа от 0 до 1(не включая)*/


// Напишите функцию random(n,m), которая возвращает случайное целое число от n до m


// Примечание: JSDoc - механизм описания документации кода в JS
// Комментарий для функции operation написан с использованием плагина JSDoc Generator

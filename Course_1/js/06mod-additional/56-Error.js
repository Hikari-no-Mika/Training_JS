/*
Кратко:
Error - функция-конструктор для работы с объектами-ошибками
*/

/*
Переводы слов с англ.:
error - ошибка
try - пытаться
throw - бросать 
catch - ловить, поймать
finally - в конце концов
*/

//console.log('%cтынц','color:red');

let x = 11;

try {

  let error = new Error("На ноль делить нельзя");
  if (x == 0) throw error;

  //  if(x % 2 == 1){
  //    throw new Error('Нельзя делить на нечетные');
  //  }
  console.log(16 / x);

} catch (er) {
  
  console.log(er.message);

}


// Есть функция sum(), которая возвращает сумму своих аргументов.
// Заключите вызов функции в блок try/catch, чтобы при удачном
//  выполнении выводился результат работы функции, 
// а в случае исключения ошибка выводилась в консоль (скрипт не ломался) 

const sum = (...a) => {
  let result = 0;
  for(let i = 0; i < a.length; i++){
    if(typeof a[i] != 'number'){
      throw new Error(`Аргумент ${i} со значением ${a[i]} не является числовым`)
    }
    result += a[i];
  }
  return result;
}

console.log( sum(10, 20, 30) );
// console.log( sum(10, 20, 30, '40') );
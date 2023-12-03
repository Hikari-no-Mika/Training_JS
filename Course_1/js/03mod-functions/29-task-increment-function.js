/* Создать функцию increment(n), которая на вход
принимает начальное числовое значение, а на выходе
возвращает функцию inc(), которая при вызове 
увеличивает число на 1  */

function increment(n){
  function inc(){
    return ++n;
  }
  return inc;
}
const foo = increment(10);
console.log( foo() );//11
console.log( foo() );//12
console.log( foo() );//13

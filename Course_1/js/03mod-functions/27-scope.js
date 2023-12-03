
let i = 10, j = 'й', k = true;//глобальный

function foo(i = 4){
  i++;
  let j = '1';
  function some(){
    console.log(i, j, k);//5 '1' true
  }
  some();
}

foo();
console.log(i);//10
console.log(j);//й

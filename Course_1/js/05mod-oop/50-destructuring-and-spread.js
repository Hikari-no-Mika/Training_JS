/*
Переводы слов с англ.:
spread - распространение
rest - остальные, остальное
*/

let arr = [23,45,78];
//let r = arr[0], g = arr[1], b = arr[2];

let [r,g,b] = arr;

let cat = {name:'Гаральд',age: 5};
let {name, age} = cat;

console.log(r,g,b);
console.log(name, age);

let [r1, ...c] = arr;
console.log(r1,c);
console.log( Math.max(...arr) );
console.log( Math.max.apply(null,arr) );

function avg(...args){
  let s = 0;
  args.forEach( v => {s += v} );
  return s / args.length
}

console.log( avg(10,100,190) );//100













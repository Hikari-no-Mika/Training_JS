/* Вывести таблицу умножения 10x10 */

// const ROWS = 10, COLS = 10;
// let table = '';
// for(let i = 0; i < ROWS; i++){
//   for(let j = 0; j < COLS; j++){
//     // table += `${(i+1)*(j+1)}\t`;
//     table += (i+1) *(j+1) + '\t';
//   }
//   table += '\n';
// }
// console.log(table);

const ROWS = 10, COLS = 10;
let table = '<table>\n';
for (let i = 0; i < ROWS; i++) {
  table += '\t<tr>\n';
  for (let j = 0; j < COLS; j++) {
    table += '\t\t<td>' + (i + 1) * (j + 1) + '\n';
  }
}
table += '</table>';
// document.body.innerHTML = table;
console.log(table);



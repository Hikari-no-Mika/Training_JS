// Сформируйте и выведите в консоль (!) HTML-код выпадающего списка
// (select) с пунктами "вариант N", где N от 0 до 7 включая
// Например: 
// <select> 
//   <option>вариант 0
//   <option>вариант 1
//   ....
// </select> 


let select = '<select name="sel">';
let i = 0;
const num = 7;

do {
  select += `\t<option value=${i}>вариант ${i}\n`;
  i++;
} while (i <= num);

select += '</select>';
console.log(select);


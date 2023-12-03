/*
Кратко:
Date - функция-конструктор для работы с объектами даты
Берет дату из текущего окружения
месяцы считаются с нуля (январь - нулевой)
дни недели считаются с нуля - воскресение имеет нулевой индекс
new Date(18238738683457) = миллисекунды от 1 янв. 1970
new Date(2025, 0) = 1 янв. 2025
популярные библиотеки: dateFns.js, moments.js
*/

// console.log(Date);
// console.log(Date.prototype);
// console.log(new Date);

let dt;
dt = new Date('1 jun 2025');
dt = new Date('1 2025 jun ');
dt = new Date(18238738683457);
dt = new Date(2024, 0, 14, 10, 20, 30);
dt = new Date(2024, 0, 100, 0, 1000);
dt = new Date();
console.log(dt);
console.log(dt.toISOString());

dt.setMonth(7);

console.log(dt.getTime());
console.log(dt.getDay());
console.log(dt.getMonth());
console.log(dt.getFullYear());
console.log(dt.getHours());
console.log(dt);

console.log(dt.toLocaleTimeString());
console.log(dt.toLocaleDateString());
console.log(Date.UTC(2024,0,1,3,10));
console.log(new Date(1704078600000));

console.log(dt.getTimezoneOffset());

const minutes = -180;
dt.setMinutes(dt.getMinutes() + minutes);
console.log(dt);

console.log(new Date(2024,0).getTime());
console.log(new Date(2024,1).getTime());


console.log(
  new Date(2024,0) - new Date(2024,1)
);

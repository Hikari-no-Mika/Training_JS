// Написать функцию daysBeforeHNY(date), которая получает объект-дату, 
// и возвращает количество дней до грядущего Нового года

function daysBeforeHNY(date) {
  let year = date.getFullYear();
  let next = year + 1;
  let hny = new Date(next, 0);
  let diff = hny - date;
  return diff / (1000 * 60 * 60 * 24);
}

const dt = new Date(2025, 11, 15);
console.log(`Осталось дн. ${daysBeforeHNY(dt)}`); //Осталось дн. 17

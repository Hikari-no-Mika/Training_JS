// Написать функцию square() для нахождения площади прямоугольника
// со сторонами width и height

function square(width, height) {
  return width * height;
}
console.log(square(10, 50));



// Напишите функцию sign(t), которая принимает аргумент t и возвращает 1,
// если число t - положительное, и -1, если t - отрицательное. 
// В противном случае - 0 

function sign(t) {
  return t > 0 ? 1 : t < 0 ? -1 : 0;
}
function sign(t) {
  if (t > 0) return 1;
  if (t < 0) return -1;
  return 0;
}
console.log(sign(-5));
console.log(sign(235));
console.log(sign(0));



// Напишите функцию bmi(m, h), которая возвращает индекс массы тела 
// где m - масса человека в кг, h - рост человека в метрах

function bmi(m, h) {
  return m / (h * h);
}
console.log(bmi(100, 1.8));

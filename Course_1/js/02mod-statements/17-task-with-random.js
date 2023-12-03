// Напишите цикл, который будет создавать описания двадцати
// CSS-цветов в RGB-формате
// Например:
// rgb(84, 138, 167)
// rgb(152, 100, 173)
// ...
// rgb(153, 214, 88)

const NUM_COLORS = 20
for (let i = 20; i--;) {
    let r = Math.round(Math.random() * 255);
    let g = Math.round(Math.random() * 255);
    let b = Math.round(Math.random() * 255);
    let color = `rgb(${r},${g},${b})`;
    console.log(color)
}


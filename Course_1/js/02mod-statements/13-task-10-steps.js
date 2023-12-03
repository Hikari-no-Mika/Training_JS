// Дана константа CHARS равная 10. Напишите скрипт,
// который сгенерирует пароль из этого количества символов
// Примечание: нужно генерировать числа от 33 до 126 - это номера
// символов в таблица ASCII. А потом использовать Strong.fromCharCode()

const CHARS = 10;
let i = 0;
let password = '';

while (i < CHARS) {
    let num = Math.round(Math.random() * (126 - 33) + 33)
    let char = String.fromCharCode(num);
    // console.log(`сгенерировано число ${num} - символ ${char}`)
    password += char
    i++;
}

console.log(`пароль ${password}`)
/*
Кратко
замыкание - когда первая функция возвращает вторую,
а вторая "видит" переменные первой
*/


/* Напишите функцию sumN, которая возвращает другую функцию. Возвращаемая должна складывать произвольное число с начальным N  */
{
    function sumN(n) {
        function s(m) {
            return n + m;
        }

        return s;
    }

    const foo = sumN(10);

// console.log(typeof foo);
// console.log(foo);

    console.log(foo(5)); //15
    console.log(sumN(10)(5)); //15
}

// Напишите функцию start(x,y), которая принимает произвольные
// целочисленные начальные координаты x и y, а возвращает функцию
// move(dx, dy), которая меняет исходные координаты на величины dx и dy
// При вызове fn должны выводиться новые координаты, с учетом смещения на  dx и dy
// Например,
{
    function start(x, y) {
        return function move(dx, dy) {
            x += dx;
            y += dy;
            return `x=${x}, y=${y}`;
        }
        return move;
    }

    const move = start(10, 10);
    console.log(move(2, 3)); //12, 13
    console.log(move(-7, -13)); //5, 0
    console.log(move(5, 23)); //10, 23
    const move2 = start(5, 7); //даже с дописанной 2 функция move находится и воспроизводится
    console.log(move2(5, 4)); //10, 11
}
/*
Кратко:
операторы присвоения - задают значения переменным или константам
арифметические операторы - дают в результате вычисления число
строковые - вычисляются в строку
логические операторы - дают в результате boolean или другие типы
операторы сравнения - определяют соотношения значений
*/

/*
Переводы слов с англ.:
type of - тип
math - математика
power - степень
round - круглый
ceil - потолок
floor - пол
Not a Numberm, NaN - не число
true - истинный
false - ложный
less - меньше
more - больше
equality operator - оператор равенства
assignment operator - оператор присвоения
array - массив
in - в
*/

const name = "John";
let salary = 100000;
var isProgrammer = true;
let color = null;
console.log(name, salary, isProgrammer, color);

console.log(typeof name);
console.log(typeof salary);
console.log(typeof isProgrammer);
console.log(typeof color);

//математические
console.log(10 + 3); // 13
console.log(10 - 3); // 7
console.log(10 / 3); // 3.33
console.log(10 * 3); // 30
console.log(10 % 3); // 1

console.log(12 % 7); // 5
console.log(3 % 10); // 3
console.log(234234 % 2); //0
console.log(2342342342347 % 2); //1

console.log(10 ** 3); // 1000
console.log(Math.pow(10, 3)); //1000
console.log((2 + 2) * 2);
console.log(Math.round(36.6)); // 37
console.log(Math.ceil(36.6)); // 37
console.log(Math.floor(36.6)); // 36

//работа со строками
console.log("привет" + " " + "мир!");
console.log("5" + 3);
console.log(+"5" + 3);
console.log("5" - 3);
console.log("5кг" - 3); //NaN
console.log(typeof NaN);

//логические
let flag = false;

console.log(!true);
console.log(!false);
console.log(!!flag);

console.log(!!0);
console.log(!!"");
console.log(!!undefined);
console.log(!!null);
console.log(!!NaN);

console.log(!!10);
console.log(!!-10);
console.log(!!"мир");
console.log(!!{});
console.log(!!true);
console.log(!![]);
console.log(!!100n);

console.log(false || false); // false
console.log(false || true); // true
console.log(true || false); // true
console.log(true || true); // true

console.log(false && false); // false
console.log(false && true); // false
console.log(true && false); // false
console.log(true && true); // true

console.log(10 || "Привет!"); //10
console.log("кошелек" || "жизнь"); //'кошелек'
console.log(0 || "Привет!"); //'Привет!'
console.log(0 || ""); //''
let expression1 = 0 || "" || false || 100n || true;
console.log(expression1);

console.log(5 == 5);
console.log(5 == "5");
console.log(5 === "5");
console.log(5 > 0);
console.log(5 < 0);
console.log(5 >= 0);
console.log(5 <= 0);
console.log(5 != 0);

let i = 10;

i = i + 1; //11
i += 1; //12
i++; //13
++i; //14

var j = 0;
console.log(j); //0
console.log(j);

var j = 0;
console.log(++j); //1
console.log(j);

//
//
//Работа с уроком 1
console.clear();

let counter = 100;

counter = counter + 10; //110
counter += 5; //115
counter++; //116
++counter; //117
console.log (counter++); //117 118
console.log ('результат 1', counter); 

console.log (++counter); //119
console.log ('результат 2', counter); 

console.log (counter);
console.log (typeof counter);

const PRICE = 2000;
{
   let counter = 1000; //отдельн блок другого ур-ня видимости потому нет ошибки при присвоении с такими же именами переменных как ранее но если тут нет нужной переменной он начнет искать ее выше
   const PRICE = 3000;
}

const cat = {weight: 3};
cat.weight = cat.weight + 2;
console.log(cat); //пример изм свойств константы


// Определить какой  тип данных у величины "Мир"
console.log("typeof 'Мир':", typeof "Мир");

// Определить находится ли зарплата 120000 в диапазоне 150000 и 200000
console.log(120_000 > 150_000 && 120_000 < 200_000)
{
   const salary = 120_000;
   console.log("Ответ на задачу про зп", salary > 150_000 && salary < 200_000)
}

// Есть переменные flag = true и amount = 100, определить является ли true условие, когда flag - истина И amount равен 150
{
   let flag = true;
   let amount = 100;
   console.log("Ответ на задачу про переменные flag = true и amount = 100",(flag==true && amount == 150) ==true);
}

// Дана функция y = x * x. Найти значение y при x = 23
const x = 23;
const y = x * x;
console.log("Ответ на функцию y = x * x, при x = 23 ->", (y))

// Стороны прямоугольного треугольника равны 3 и 4. Найдите гипотенузу.
{let a = Math.pow(3, 2); //возведение в степень 2
let b = Math.pow(4, 2);
let c = a + b;
c = Math.sqrt(c); //извлечение корня
console.log("Поиск гипотенузы по 2 катетам 3 и 4 ->", c)
}

// Даны две переменных from=10 и to=22. Найдите среднее значение.
{
   let from = 10;
   let to = 22;
   let n = 2;
   s = ((from + to)/n);
   console.log("Среднее значение ->", s)
}

// Дана строка `Java` и строка `Script`, склейте их и выведите результат
{console.log("Java " + "Script");}

// Дана переменная arr с массивом [200,300,400]. Выведите число 300
// обратившись к элементу с индексом один: arr[1]
{
arr=[200,300,400];
console.log("Выведите число 300 из массива:", arr[1]);
}

// Дана строковая переменная str=`JavaScript`. Выведите символ 'v'
// обратившись к символу строки с индексом два: str[2]
{
str="JavaScript";
console.log("Выведите символ 'v' из JavaScript:", str[2]);
}

// Дана переменная num=144. Возведите число в степень 0.5
// (означает нахождение корня квадратного)
{
let num = Math.pow(144, 0.5); //возведение в степень 0.5 (корень квадр)
console.log("Возведите число в степень 0.5:", num)
}

// Дана переменная с количеством доставленных пицц pizza=2.
// В каждой пицце 8 кусков. Дана переменная friends=5 - количество друзей
// Выведите сколько кусков пиццы останется после перекуса, если
// каждый получит одинаковое количество кусков
{
let dost = 2;
const k = 8;
let friends = 5;
let sum = dost * k;
e = sum / friends;
let x = Math.floor(e); //арифм выделение целой части (съеденных кусков каждым)
let y = sum - (x * friends); //из общего вычитаем съеденное
console.log("сколько кусков пиццы останется после перекуса:", y)
}

// Дана переменная cat={color: 'grey'}. Используя оператор in уточните, есть ли
// в объекте свойство 'color' определяющее цвет  - результат нужно вывести. Определите, есть ли
// в объекте свойство 'weight' определяющее массу
{
   let cat = {color: "grey"};
   console.log("Свойство кота (цвет/вес): ->", "color" in cat, "weight" in cat);
}

// Дана константа birds=['голубь', 'орёл', 'дрозд']. Обратитесь к свойству массива
// length (это можно сделать так birds.length) и определите при помощи этого свойства
// равно ли количество слов в массиве числу четыре (4)
{
   const birds=["голубь", "орёл", "дрозд"];
   console.log("количество слов в массиве 4? ", birds.length == 4);
}

// Дана функция function fn(){ return 10; }. Выведите вызов функции (это можно сделать так - fn())
// Проверьте при помощи оператора if, я является ли возвращаемое значение числом. Можно
// использовать оператор if
{
   function fn(){ return 10;};
   if (fn()) typeof "number"; {
      console.log(fn(), " является числом")   
   } else {
   console.log("Тип не является числом");}
}

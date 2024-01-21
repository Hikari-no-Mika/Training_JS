/*
Кратко:
valueOf - метод объектов, срабатывающий при попытке превращения объекта в число
Это бывает при использовании объекта и математического оператора
*/

/*
Переводы слов с англ.:
value of  - значение
*/

let ticket = {
    uuid: "d55259b5-4299-4f67-8d00-6d47c0dc0ed7",
    from: "Москва",
    to: "Санкт-Петербург",
    price: 10_000,
    valueOf() {
        return this.price;
    }
};

console.log(ticket * 0.95); //NaN


//Другой пример
{
    let cat1 = {name: 'кот'};
    console.log(cat1 - 10); //Nan
    cat1.valueOf = function () {
        return 100;
    }
    console.log(cat1 - 10); //90
}

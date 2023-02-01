const myFunc = function(name, age) {
    return this.name + ", " + this.age;
} // у стрелочной функции нет контекста, в строгом режиме - undefined; в нестрогом - Window.
// если стрелочная функция вызывается внутри обычной функции, то она возьмет контекст обычной функции

const user= {
    name: 'Harry Potter',
    getName: myFunc,
};

// console.log(user.getName());

let newMyFunc = myFunc.bind({name: 'John'}); // создание функции с привязанным контекстом, аргументы передаются через запятую.
newMyFunc = myFunc.bind({name: 'Sara', age: 23}); // измененние значения переменной
console.log(newMyFunc.call({name: 'Anna', age: 38})); // второй раз контекст не привязывается

console.log(myFunc.call({name: 'Peter Parker', age: 26})); // вызов функции с привязанным контекстом, аргументы передаются через запятую.

console.log(myFunc.apply({name: 'Jack Sparrow', age: 26})); // создание функции с привязанным контекстом, аргументы передаются как элементы массива.


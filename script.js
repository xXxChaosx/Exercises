"use strict";
console.log("Підключаємо JavaScript для Практичної роботи №2");

function greet(){
    console.log("Привіт, світ!");
}
greet();
greet();

const multiply = function(a, b){
    return a * b;
};
console.log(multiply(4, 5));

const divide = (a, b) => a/b;
console.log(divide(20, 4));

function square(x){
    return x * x;
}
console.log(square(6));

if(true){
    let localVar = "Я в блоці";
    console.log(localVar);
}
// console.log(localVar); // Виведе помилку

function createCounter() {
    let count = 0;
    return function(){
        count++;
        return count;
    };
}
const counter = createCounter();
console.log(counter());
console.log(counter());

const person = {
    name: "Олена",
    sayHello(){
        console.log(`Привіт, мене звуть ${this.name}`);
    }
};
person.sayHello();

function add(a){
    return function(b){
        return a + b;
    };
}
const addTen = add(10);
console.log(addTen(5));

// Самостійне завдання
function createSurvey(){
    let name = prompt("Введіть ваше ім'я: ");
    let age = Number(prompt("Введіть ваш вік: "));
    let city = prompt("Введіть ваше місто: ");
    let isAdult = age >= 18;

    return function displaySurvey(){
        console.log(`Ім'я: ${name}\nВік: ${age}\nМісто: ${city} \n${isAdult ? "Користувач повнолітній":"Користувач неповнолітній"}`);
    }
}
let survey = createSurvey();
survey();

function createConverter(multiplier){
    return function(offset){
        return function(temp){
            return temp * multiplier + offset;
        };
    };
}
const CtoF = createConverter(9/5)(32);
const FtoC = createConverter(5/9)(-32 * 5/9);

function chooseConverter(){
    let number = Number(prompt("Ведіть числове значення температури: "));
    let choose = Number(prompt("Оберіть тип конвертації: Введіть 1 якщо хочете конвертувати C до F, якщо навпаки, то введіть бідь-яку іншу цифру: "));

    if(choose = 1){
        alert(`${number}°C = ${CtoF(number)} F`);
        console.log(`${number}°C = ${CtoF(number)} F`);
    } else{
        alert(`${number}F = ${FtoC(number)} °C`);
        console.log(`${number}F = ${FtoC(number)} °C`);
    }
    
}

chooseConverter();

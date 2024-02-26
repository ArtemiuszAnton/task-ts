// 6. Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.

type t = number

class Calculator {

    add(a: t, b: t) {
        return a + b
    }

    subtract(a: t, b: t) {
        return a - b
    }

    multiply(a: t, b: t) {
        return a * b
    }

    divide(a: t, b: t) {
        return a / b
    }
}

const calculator = new Calculator();
// const plus = calculator.add(4, 6);
// calculator.subtract(12, 4);
// calculator.multiply(2, 2);
// calculator.divide(26, 2);
console.log(calculator.add(12, 4), calculator.subtract(23, 5), calculator.multiply(32, 4), calculator.divide(22, 2));

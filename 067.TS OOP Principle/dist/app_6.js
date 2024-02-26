// 6. Создайте класс Calculator, который содержит методы add() (сложение), subtract()
// (вычитание), multiply() (умножение) и divide() (деление). Создайте экземпляр
// класса Calculator и выполните несколько операций.
class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        return a / b;
    }
}
const calculator = new Calculator();
// const plus = calculator.add(4, 6);
// calculator.subtract(12, 4);
// calculator.multiply(2, 2);
// calculator.divide(26, 2);
console.log(calculator.add(12, 4), calculator.subtract(23, 5), calculator.multiply(32, 4), calculator.divide(22, 2));

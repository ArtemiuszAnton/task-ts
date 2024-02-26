// 1. Создайте класс Student, который содержит проинициализированные свойства
// name (имя) и age (возраст). Создайте экземпляр класса Student и выведите
// свойства.
class Student {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const student = new Student('Artem', 25);
console.log(`${student.name} ${student.age}`);

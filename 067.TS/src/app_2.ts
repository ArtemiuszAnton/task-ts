// 2. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит с помощью экземпляра класса.


class Student2 {
    name: string;
    age: number;
}

const student2 = new Student2();
student2.name = 'Artem';
student2.age = 25;

console.log(student2.name);

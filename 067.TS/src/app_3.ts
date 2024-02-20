// 3. Создайте класс Student, который содержит свойства name (имя) и age (возраст).
// Инициализация свойств name, age происходит в конструкторе класса. Создайте
// несколько экземпляров класса Student и выведите свойства.


class Student3 {
    name: string;
    age: number;

    setName(name: string) {
        this.name = name;
    }

    setAge(age: number) {
        this.age = age;
    }
}

const student3 = new Student3();
student3.setName('Artem');
student3.setAge(25)
console.log(`${student3.name} ${student3.age}`);


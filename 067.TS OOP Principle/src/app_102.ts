// 2. Создайте абстрактный класс Animal, содержащий абстрактный метод
// makeSound(). Напишите дочерние классы Dog и Cat, которые наследуют Animal и
// реализуют метод makeSound() для издания соответствующего звука. Создайте
// объекты классов Dog и Cat и вызовите их методы makeSound().


abstract class Animal {
    abstract makeSound(sound: string): void

}

class Dog extends Animal {
    makeSound(sound: string): void {
        console.log(sound);
    }
}

class Cat extends Animal {
    makeSound(sound: string): void {
        console.log(sound);
    }
}

const cat = new Cat();
const dog = new Dog();
dog.makeSound('Gau');
cat.makeSound('Meow');



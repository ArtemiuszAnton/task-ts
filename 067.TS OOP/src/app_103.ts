// 3. Создайте абстрактный класс Fruit с полем array – массив объектов (id, title, price).
// Напишите дочерний класс Apple, функцию getAppleInfo, возвращающую
// информацию о фрукте, где title = яблоко.

interface Fruits {
    id: number;
    title: string;
    price: number
}

abstract class Fruit {
    abstract array: Fruits[]
}

class Apple extends Fruit {
    array = [
        { id: 1, title: 'apple', price: 2 },
        { id: 2, title: 'pineapple', price: 7 },
        { id: 3, title: 'marakuja', price: 5 },
    ];

    getAppleInfo(): {} {
        return this.array.filter((el) => el.title === 'apple')
    }
}

const apple = new Apple();
console.log(apple.getAppleInfo());

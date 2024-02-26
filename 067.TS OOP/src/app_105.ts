// 5. Создайте абстрактный класс "Транспортное средство" (Vehicle), который содержит
// абстрактные методы "завести" (start) и "остановить" (stop). Реализуйте классынаследники "Автомобиль" (Car) и "Мотоцикл" (Motorcycle), которые расширяют
// класс "Транспортное средство" и реализуют абстрактные методы в соответствии с
// особенностями каждого транспортного средства. (седержимое методов: console.log)

abstract class Vehicle {
    abstract start(): void;
    abstract stop(): void;
}

class Car extends Vehicle {
    start(): void {
        console.log('Vrum vrum');
    }
    stop(): void {
        console.log('Brrr');
    }
}
class Motorcycle extends Vehicle {
    start(): void {
        console.log('Vruuuuum');
    }
    stop(): void {
        console.log('Silence');
    }
}

const car = new Car();
const moto = new Motorcycle();

moto.start()

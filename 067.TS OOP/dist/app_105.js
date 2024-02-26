// 5. Создайте абстрактный класс "Транспортное средство" (Vehicle), который содержит
// абстрактные методы "завести" (start) и "остановить" (stop). Реализуйте классынаследники "Автомобиль" (Car) и "Мотоцикл" (Motorcycle), которые расширяют
// класс "Транспортное средство" и реализуют абстрактные методы в соответствии с
// особенностями каждого транспортного средства. (седержимое методов: console.log)
class Vehicle {
}
class Car extends Vehicle {
    start() {
        console.log('Vrum vrum');
    }
    stop() {
        console.log('Brrr');
    }
}
class Motorcycle extends Vehicle {
    start() {
        console.log('Vruuuuum');
    }
    stop() {
        console.log('Silence');
    }
}
const car = new Car();
const moto = new Motorcycle();
moto.start();

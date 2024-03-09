// 2. Реализуйте класс ServerGetAll. Обязательными функциями считаются функции
// controller, service, repository. Цепочка взаимодействия между методами
// следующая: controller -> service -> repository, где:
// Задание:
// Необходимо вывести в консоль массив из репозитория
class ServerGetAll {
    controller() {
        console.log(this.service);
    }
    service() {
        return this.repository;
    }
    repository(arr) {
        arr = [12, 23, 4334, 4, 34, 4];
        return arr;
    }
}
const serverGetAll = new ServerGetAll();
serverGetAll.controller();

// 13. Реализуйте класс ServerPost. Обязательными функциями считаются функции
// middleware, controller, service, repository. Цепочка взаимодействия между
// методами следующая: middleware -> controller -> service -> repository, где:
// Задание:
// на вход подается JSON вида: `{ "email": "Test", "pwd": "test" }`
// Необходимо добавить в массив БД объект только в том случае, если нет
// совпадений по email.
const json = { email: "Test", pwd: "test" };
class ServerPost {
    controller(json) {
        return this.service(json);
    }
    service(json) {
        return this.repository(json);
    }
    repository(json) {
        const arr = [
            { email: "Test", pwd: "test" },
            { email: "Test", pwd: "test" },
            { email: "Test", pwd: "test" },
            { email: "Test", pwd: "test" },
        ];
        const res = arr.filter((el) => el.email === json.email);
    }
}

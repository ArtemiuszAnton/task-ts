// 10. Создать интерфейс iPwd. Создайте класс Pwd. Pwd хранит функцию showPwd,
// которая формирует и возвращает рандомно сгенерированный пароль из 8 чисел.
// Класс Validation является производным по отношению к базовому, родительскому
// Pwd и содержит функцию showPwd. Необходимо переопределить showPwd из
// базового класса и записать в переменную используя метод super. Далее
// дополняем переопределенный метод отображением результата в console.


interface iPwd {
    showPwd(): string
}

class Pwd implements iPwd {
    showPwd(): string {
        let pwd: string = '';
        for (let i = 0; i < 8; i++) {
            pwd += `${Math.floor(Math.random() * 9)}`
        }
        return pwd
    }
}

class Valid extends Pwd {
    showPwd(): string {
        const password = super.showPwd();
        return password
    }
}

const valid = new Valid();
console.log(valid.showPwd());

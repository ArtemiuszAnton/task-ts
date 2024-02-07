// 4. Создайте переменную grade и присвойте ей значение от 1 до 5. Используя
// оператор switch, выведите в консоль описание оценки (например, "Отлично",
// "Хорошо" и т.д.) в зависимости от значения переменной grade.


const grade: number = 3;

switch (grade) {
    case 1:
        console.log('Отвратительно');

        break;
    case 2:
        console.log('Плохо');

        break;
    case 3:
        console.log('Нормально');

        break;
    case 4:
        console.log('Хорошо');

        break;
    case 5:
        console.log('Отлично');

        break;
}
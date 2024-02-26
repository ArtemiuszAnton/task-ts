// 11. Создайте абстрактный класс University, который содержит абстрактный метод
// getStudentById и поле students – массив объектов. Student – класс наследник,
// реализующий абстрактный метод getStudentById.
class University {
    students = [
        { id: 1, name: 'Artem', surname: 'Antonov' },
        { id: 2, name: 'Artem', surname: 'Test' },
        { id: 3, name: 'Artem', surname: 'Testov' }
    ];
}
class Student extends University {
    getStudentById(id) {
        for (const stud of this.students) {
            if (stud == id)
                return this.students;
        }
        return null;
    }
}
const student = new Student();
console.log(student.getStudentById(2));

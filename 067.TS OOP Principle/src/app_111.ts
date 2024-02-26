// 11. Создайте абстрактный класс University, который содержит абстрактный метод
// getStudentById и поле students – массив объектов. Student – класс наследник,
// реализующий абстрактный метод getStudentById.

interface obj {
    id: number,
    name: string,
    surname: string
}

abstract class University {
    abstract getStudentById(id: number);
    students: obj[] = [
        { id: 1, name: 'Artem', surname: 'Antonov' },
        { id: 2, name: 'Artem', surname: 'Test' },
        { id: 3, name: 'Artem', surname: 'Testov' }]
}

class Student extends University {
    getStudentById(id: number) {
        for (const stud of this.students) {
            if (stud.id == id) return this.students
        }
        return null
    }
}


const student = new Student();
console.log(student.getStudentById(2));

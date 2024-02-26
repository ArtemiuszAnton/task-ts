// 9. Создать интерфейс iValidation. Создайте класс Validation с публичными методами
// isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса
// Validation. Конструктор принимает поля email, date, path и инициализирует их как
// поля класса. В каждом методе напишите соответствующую проверку
class Validation {
    email;
    date;
    pwd;
    setEmail(email) {
        if (typeof email === 'string')
            this.email = email;
    }
    setDate(date) {
        if (typeof date === 'string')
            this.date = date;
    }
    setPath(pwd) {
        if (typeof pwd === 'string')
            this.pwd = pwd;
    }
    isValidEmail() {
        if (/^[\w]+\@[a-z]+\.[a-z]{3,5}$/gm.test(this.email))
            return true;
        else
            return false;
    }
    ;
    isValidDate() {
        if (/^[1-9]{2}\.[1-9]{2}\.[0-9]{4}$/gm.test(this.date))
            return true;
        else
            return false;
    }
    ;
    isValidPath() {
        if (this.pwd.length >= 8)
            return true;
        else
            return false;
    }
}
const validation = new Validation();
validation.setEmail('artem@gmail.com');
validation.setDate('111.2011');
validation.setPath('wewwfwfwfwf');
console.log(validation.isValidDate());
console.log(validation.isValidEmail());
console.log(validation.isValidPath());

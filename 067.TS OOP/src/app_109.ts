// 9. Создать интерфейс iValidation. Создайте класс Validation с публичными методами
// isValidEmail, isValidDate, isValidPath, вызывающиеся через конструктор класса
// Validation. Конструктор принимает поля email, date, path и инициализирует их как
// поля класса. В каждом методе напишите соответствующую проверку


// interface iValidation {
//     isValidEmail(): boolean
//     isValidDate(): boolean
//     isValidPath(): boolean
//     email: string
//     date: string
//     pwd: string
// }

// class Validation implements iValidation {
//     email: string;
//     date: string;
//     pwd: string;
//     constructor(email, date, pwd) {
//         this.email = email;
//         this.date = date;
//         this.pwd = pwd;
//     }

//     isValidEmail(): boolean {
//         if (/^[\w]+\@[a-z]+\.[a-z]{3,5}$/gm.test(this.email)) return true
//         else return false
//     };

//     isValidDate(): boolean {
//         if (/^[1-9]{2}\.[1-9]{2}\.[0-9]{4}$/gm.test(this.date)) return true
//         else return false
//     };

//     isValidPath(): boolean {
//         if (this.pwd.length >= 8) return true
//         else return false
//     }
// }

// class Validation {
//     email = 'artem@gmail.com';
//     date = '11.11.2011';
//     pwd = '2132fdsds';

//     isValidEmail(): boolean {
//         if (/^[\w]+\@[a-z]+\.[a-z]{3,5}$/gm.test(this.email)) return true
//         else return false
//     };

//     isValidDate(): boolean {
//         if (/^[1-9]{2}\.[1-9]{2}\.[0-9]{4}$/gm.test(this.date)) return true
//         else return false
//     };

//     isValidPath(): boolean {
//         if (this.pwd.length >= 8) return true
//         else return false
//     }
// }

// interface iValidation {
//     isValidEmail(email: string): boolean
//     isValidDate(date: string): boolean
//     isValidPath(pwd: string): boolean
// }

// class Validation implements iValidation {
//     isValidEmail(email: string): boolean {
//         if (/^[\w]+\@[a-z]+\.[a-z]{3,5}$/gm.test(email)) return true
//         else return false
//     };

//     isValidDate(date: string): boolean {
//         if (/^[1-9]{2}\.[1-9]{2}\.[0-9]{4}$/gm.test(date)) return true
//         else return false
//     };

//     isValidPath(pwd: string): boolean {
//         if (pwd.length >= 8) return true
//         else return false
//     }
// }


interface iValidation {
    email: string;
    date: string;
    pwd: string;
    setEmail(email: string): void;
    setDate(date: string): void;
    setPath(pwd: string): void;
    isValidEmail(): boolean;
    isValidDate(): boolean;
    isValidPath(): boolean;
}

class Validation implements iValidation {
    email: string;
    date: string;
    pwd: string

    setEmail<Type>(email: Type): void {
        if (typeof email === 'string') this.email = email
    }

    setDate<Type>(date: Type): void {
        if (typeof date === 'string') this.date = date
    }

    setPath<Type>(pwd: Type): void {
        if (typeof pwd === 'string') this.pwd = pwd
    }

    isValidEmail(): boolean {
        if (/^[\w]+\@[a-z]+\.[a-z]{3,5}$/gm.test(this.email)) return true
        else return false
    };

    isValidDate(): boolean {
        if (/^[1-9]{2}\.[1-9]{2}\.[0-9]{4}$/gm.test(this.date)) return true
        else return false
    };

    isValidPath(): boolean {
        if (this.pwd.length >= 8) return true
        else return false
    }
}

const validation = new Validation();
validation.setEmail<string>('artem@gmail.com');
validation.setDate<string>('111.2011');
validation.setPath<string>('wewwfwfwfwf')
console.log(validation.isValidDate());
console.log(validation.isValidEmail());
console.log(validation.isValidPath());

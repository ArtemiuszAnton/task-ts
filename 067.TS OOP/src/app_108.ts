// 8. Создайте класс PasswordGenerator, который будет иметь метод generatePassword,
// позволяющий генерировать случайные безопасные пароли заданной длины.
// Метод generatePassword принимает в качестве параметра длину пароля.
// Использовать Generics

class PasswordGenerator {
    pwdLength: number;
    setPwdLength<Type>(pwd: Type): void {
        if (typeof pwd == 'number') {
            this.pwdLength = pwd
        }
    }
    generatePassword(): string {
        let password = '';
        for (let i = 0; i < this.pwdLength; i++) {
            password += Math.floor(Math.random() * 9)
        }
        return password
    }
}

const passwordGenerator = new PasswordGenerator();
passwordGenerator.setPwdLength<number>(8);
console.log(passwordGenerator.generatePassword());

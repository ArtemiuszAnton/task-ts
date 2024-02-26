// 4. Создать интерфейс iAccount. Создайте класс "Счет" (Account), который содержит
// свойство "баланс" (balance) и методы "пополнить счет" (deposit) и "снять со счета"
// (withdraw). Установите приватное свойство "баланс" и обеспечьте доступ к нему
// только через методы класса. Реализуйте проверку на достаточность средств
// перед снятием со счета.

interface iAccount {
    balance: number;
    deposit(plusSum: number): number;
    withdraw(minusSum: number): number
}

class Account implements iAccount {
    balance = 222;

    deposit(plusSum: number): number {
        return this.balance + plusSum
    }

    withdraw(minusSum: number): number {
        return this.balance - minusSum
    }
}

const account = new Account();
console.log(account.deposit(44));



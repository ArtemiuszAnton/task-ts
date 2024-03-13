// 10. Создайте класс PersonArray, который имеет свойство array (массив объектов
//     Person) и методы:
//     getNames(): string[] - возвращает массив имен всех людей.
//     getAdults(): Person[] - возвращает массив только совершеннолетних людей.
//     getAverageAge(): number - возвращает средний возраст всех людей.

interface iArray_10 {
    name: string,
    age: number
}

class PersonArray {

    array: iArray_10[] = [{ name: 'ivan', age: 16 }, { name: 'alex', age: 22 }, { name: 'piter', age: 30 }]

    getNames(): string[] {
        let arrNames: string[] = [];
        for (let i = 0; i < this.array.length; i++) {
            arrNames.push(this.array[i].name)
        }
        return arrNames
    }

    getAdults(): iArray_10[] {
        return this.array.filter((el) => el.age >= 18);
    }

    getAveregeAge(): number {
        return this.array.reduce((sum, el) => sum += el.age, 0) / this.array.length
    }

}

// console.log(personArray.getNames());
// console.log(personArray.getAdults());

describe('test PersonArray', () => {
    test('getNames', () => {
        const personArray = new PersonArray();
        const res = personArray.getAveregeAge();
        expect(res).toEqual(['ivan', 'alex', 'piter'])
    })

    test('correct getAdults', () => {
        const personArray = new PersonArray();
        const res = personArray.getAdults();
        expect(res).toEqual([{ name: 'alex', age: 22 }, { name: 'piter', age: 30 }]);
        expect(res.length).toBeGreaterThan(0)
    })

    test('correct getAveregeAge', () => {
        const personArray = new PersonArray();
        const res = personArray.getAveregeAge();

    })
})

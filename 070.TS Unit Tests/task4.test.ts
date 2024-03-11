// 4. Напишите функцию flattenArray(array: any[]): any[], которая принимает массив, в
// котором могут быть вложенные массивы, и возвращает новый массив, в котором
// все элементы являются плоским списком без вложенности.


const flattenArray = (array: any[] | any): any[] => {
    try {
        if (!Array.isArray(array)) throw new Error('This is not array');
        return array.flat(Infinity)
    } catch (er: any) {
        return er.message
    }
}
describe('test for flattenArray', () => {
    test('correct flatting', () => {
        const arr = [1, 23, 4, [], [2, 4], [33, [3, 43]]];
        const arr2 = [1, 2, [1, 2], [1, 2]];
        const arrFlat = flattenArray(arr);
        const arrFlat2 = flattenArray(arr2);
        expect(arrFlat).toEqual([1, 23, 4, 2, 4, 33, 3, 43]);
        expect(arrFlat2).toEqual([1, 2, 1, 2, 1, 2])
    })

    test('failed flatting', () => {
        const objArr = { arr: 2 };
        const objFlat = flattenArray(objArr);
        expect(objFlat).toBe('This is not array')
    })
})
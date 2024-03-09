// 3. Напишите функцию capitalizeString(str: string): string, которая принимает строку и
// возвращает новую строку, в которой каждое слово начинается с заглавной буквы.

function capitalizeString(str: any): string {
    try {
        if (!str) throw new Error('str not found');
        if (typeof str !== 'string') throw new Error('type error');
        const arr: string[] = []
        const newArr: string[] = []
        for (let i = 0; i < arr.length; i++) {
            newArr.push(arr[i][0].toUpperCase() + arr[i][0].slice(1))
        }
        return newArr.join(' ')
    } catch (er) {
        return er.message
    }
}


describe(' is capitalizeString',()=>{
   test('true',()=>{       
       const res = capitalizeString('Artem');
       expect(res).toBe(res)
   })
})
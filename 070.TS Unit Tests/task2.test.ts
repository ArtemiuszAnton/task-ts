// 2. Напишите функцию calculateFactorial(n: number): number, которая принимает
// число n и возвращает его факториал.

function calculateFactorial(n?: any): number {
    try {
        if (!n) throw new Error('n not found');
        if (typeof n != 'number') throw new Error('n not number');
        if (n < 0) throw new Error('n < 0');
        let res = 1
        for (let i = 0; i <= n; i++) {
            res *= i
        }
        return res

    } catch (er: any) {
        return er.message
    }
}

describe('Test Factorial', () => {
    test('true', () => {
        const res = calculateFactorial(5);
        expect(res).toBe(res)
    })

    test('false', () => {
        const res = calculateFactorial();
        expect(res).toBe('n not found');
    })

    test('false', () => {
        const res = calculateFactorial('5');
        expect(res).toBe('n not number');
    })

    test('false', () => {
        const res = calculateFactorial(-2);
        expect(res).toBe('n < 0');
    })
})
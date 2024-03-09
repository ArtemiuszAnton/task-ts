// 1. Напишите функцию isPalindrome(word: string): boolean, которая принимает слово
// и возвращает true, если оно является палиндромом (читается одинаково слева
// направо и справа налево), и false в противном случае.\


function isPalindrome(word: string): boolean | string {
    try {
        if (!word) throw new Error('word not found');
        if (typeof word != 'string') throw new Error('type Error: word not string');
        if (!word.trim().length) throw new Error('word is empty');
        return word == word.split('').reverse().join('') ? true : false
    } catch (er: any) {
        return er.message
    }
}

describe('Check word on palindrome', () => {
    test('true', () => {
        const arr = ['anna', 'dad', 'hannah'];
        for (const el of arr) {
            const res = isPalindrome(el);
            expect(res).toBe(true);

        }
    })

    test('false', () => {
        const check = isPalindrome('');
        console.log(check);
        expect(check).toBe('word not found')
    })

    test('false', () => {
        const check = isPalindrome(' ');
        expect(check).toBe('word is empty')
    })
})
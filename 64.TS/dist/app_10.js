// 10. Напишите программу, которая определяет, является ли заданная строка
// анаграммой (состоит из тех же символов, но в другом порядке) другой строки.
const anagram = 'work', anagram_2 = 'wrko';
if (anagram.split('').sort().join('') == anagram_2.split('').sort().join('')) {
    console.log('Ok');
}

// 9. Напишите программу, которая принимает строку и возвращает новую строку, в
// которой все символы уникальны (не повторяются). Например, для строки "hello"
// результатом должна быть строка "helo"


const str_1: string = "hello";
const arr = [];

for (let i = 0; i < str_1.length; i++) {
    if (!arr.includes(str_1[i])) {
        arr.push(str_1[i])
    }
}

console.log(arr.join(''));

// 13. Создайте переменную sentence и присвойте ей строковое значение
// предложения. Напишите программу, которая преобразует первую букву каждого
// слова в предложении в верхний регистр. Например, для предложения "hello
// world" результатом должна быть строка "Hello World".
let sentence = prompt().split(' ');
let upperSentence = '';
for (let i = 0; i < sentence.length; i++) {
    upperSentence += `${sentence[i][0].toUpperCase()}${sentence[i].slice(1, length - 1)} `;
}
console.log(upperSentence);

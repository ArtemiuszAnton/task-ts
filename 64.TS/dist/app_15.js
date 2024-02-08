// 15. Напишите программу, которая принимает строку и возвращает новую строку, в
// которой каждое слово заменено на последнюю букву этого слова, а все остальные
// символы остаются без изменений.
// "Hello World" -> "o d“
let str_15 = "Hello world";
console.log(str_15.slice(length - 1));
let newStr_15 = '';
for (let i = 0; i < str_15.length; i++) {
    if (str_15[i] == ' ')
        newStr_15 += `${str_15[i - 1]}`;
    if (i == str_15.length - 1)
        newStr_15 += ` ${str_15[i]}`;
}
console.log(newStr_15);

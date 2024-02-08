// 14. Напишите программу, которая удаляет все пробелы из заданной строки и
// выводит результат.


const str_14: string = 'wef wfwfwf ewf w fwf  wfw fw';

console.log(str_14.replaceAll(' ', ''));


let newStr_14: string = '';

for (let i = 0; i < str_14.length; i++) {
    if (str_14[i] != ' ') {
        newStr_14 += str_14[i]
    } else {
        newStr_14 += ''
    }
}

console.log(newStr_14);

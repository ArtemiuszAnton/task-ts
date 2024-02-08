// 12. Создайте переменную str и присвойте ей строковое значение. Используя цикл
// while, замените все гласные символы в строке на символ *.


const str_12: string = 'hello';
let newStr: string = '';
const glas: string[] = ['a', 'e', 'o', 'i', 'u', 'y'];

let i = 0;
while (i < str_12.length) {
    i++
    if (!str_12[i].includes(glas)) {
        newStr += str_12[i]
    } else {
        newStr += '*'
    }
}

console.log(newStr);

// 10. Создайте массив строк и преобразуйте каждую строку в новую строку,
// содержащую только гласные буквы.
const arr_10 = ['eerrfeeg', 'geeegege', 'vddvvdvtreeeesa'];
const res_10 = arr_10.map((el, index) => {
    return el.split('').filter((l) => {
        return 'aeiouy'.includes(l.toLowerCase());
    }).join('');
});
console.log(res_10);

// 4. Создайте динамический массив строк. Используя Some выведите true в случае
// если хотя бы 1 элемент массива имеет длину > 5 символов.
const arr_4 = [];
for (let i = 0; i < 5; i++) {
    arr_4.push(prompt());
}
const res_4 = arr_4.some((el) => {
    return el.length > 5;
});
console.log(res_4);

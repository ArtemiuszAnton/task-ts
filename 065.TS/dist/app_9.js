// 9. Создайте массив из чисел и строк и удалите из него все повторяющиеся
// элементы, оставив только уникальные значения.
const arr_9 = ['hi', 3434, 22, 'ffff', 55, 'ffff', 22];
const res_9 = arr_9.filter((el, i, arr) => {
    return arr.indexOf(el) == i;
});
console.log(res_9);

// 3. На входе динамичный массив чисел. Используя reduce выведите сумму чисел
// массива
const arr_3 = [];
for (let i = 0; i < Math.floor((Math.random() * 10)); i++) {
    arr_3.push(Math.floor(Math.random() * 100));
}
console.log(arr_3);
const res = arr_3.reduce((sum, elem) => {
    return sum + elem;
}, 0);
console.log(res);

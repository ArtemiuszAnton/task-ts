// 13. На входе динамичный массив чисел. Используя map выведите массив строк
// четности и нечетности, в соответствии со значением числа:
// [1, 2, 3, 4, 5, 6] -> [“нечет”, “чет”, “нечет”, “чет”, “нечет”, “чет”]
const arr_13 = [1, 23, 45, 7, 76, 8, 34, 2];
const res_13 = arr_13.map((el) => {
    if (el % 2 === 0)
        return 'чет';
    return 'нечет';
});
console.log(res_13);

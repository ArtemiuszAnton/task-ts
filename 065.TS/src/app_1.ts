// . Создайте массив чисел и найдите сумму всех нечетных элементов в массиве.

const arr_1: number[] = [1, 223, 34, 5];

const res_1 = arr_1.reduce((sum, elem) => {
    if (elem % 2 != 0) return sum + elem
    return sum
}, 0)

console.log(res_1);

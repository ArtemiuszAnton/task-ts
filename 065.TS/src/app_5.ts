// 5. Создайте массив чисел и найдите в нем все числа, которые делятся на 3 и не
// делятся на 2.


const arr_5: number[] = [3, 6, 7, 8, 2, 9, 12];

const res_5 = arr_5.filter((el) => {
    if (el % 2 != 0 && el % 3 == 0) return el
})
console.log(res_5);

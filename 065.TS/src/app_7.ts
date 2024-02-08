// 7. На входе 5 значений. Все эти значения пользователь вводит с клавиатуры и
// заполняет массив. Необходимо создать массив только из чисел. 



const arr_7: string[] = [];

for (let i = 5; i < arr_7.length; i++) {
    arr_7.push(prompt())
}

const res_7 = arr_7.map(el => {
    return Number(el)
}).filter((el) => {
    return !isNaN(el)
})

console.log(res_7);

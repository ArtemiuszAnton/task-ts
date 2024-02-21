// 4. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести итоговую стоимость на складе.
// Итоговая стоимость = количество * цена + ...


interface arr {
    readonly id: number;
    title: string;
    count: number;
    price: number
}

const arr_004: arr[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];


function countResult(arr_004: arr[]): number {
    let counts = 0;
    for (let i = 0; i < arr_004.length; i++) {
        counts += arr_004[i].count * arr_004[i].price
    }
    return counts
}

const result_004 = countResult(arr_004);
console.log(result_004);


const sumCount = arr_004.reduce((sum, el) => {
    return sum += el.count * el.price
}, 0)

console.log(sumCount);


// У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести все товары, количество которых больше 10

interface arr {
    readonly id: number;
    title: string;
    count: number;
    price: number
}

const arr_001: arr[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];

function isCount(arr_001: arr[]): arr[] {
    const res_001 = arr_001.filter((el) => {
        return el.count > 10
    })
    return res_001
}

const result_001 = isCount(arr_001);
console.log(result_001);

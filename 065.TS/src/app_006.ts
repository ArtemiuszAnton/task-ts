// 6. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести средний прайс среди всех продуктов


interface arr {
    readonly id: number;
    title: string;
    count: number;
    price: number
}

const arr_006: arr[] = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];

function midPrice(arr_006: arr[]): number {
    return arr_006.reduce((sum: number, elem: arr) => sum += elem.price, 0) / arr_006.length
}

const result_006 = midPrice(arr_006)
console.log(result_006);



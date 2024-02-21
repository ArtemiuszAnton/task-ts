// 7. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести тот товар, где количество * прайс является наибольшим значением
const arr_007 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
function findMaxCounts(arr_007) {
    let result_007 = arr_007[0];
    arr_007.forEach((el) => {
        if ((el.count * el.price) > (result_007.count * result_007.price))
            result_007 = el;
    });
    return result_007;
}
const maxPrice = findMaxPrice(arr_007);
console.log(maxPrice);

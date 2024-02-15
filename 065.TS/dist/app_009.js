// 5. У вас есть массив объектов вида приведенного в приложении. Необходимо
// вывести товар с максимальным прайсом
const arr_005 = [
    { id: 1, title: 'Часы', count: 10, price: 500 },
    { id: 2, title: 'Смартфон', count: 33, price: 1500 },
    { id: 3, title: 'Моноблок', count: 6, price: 2200 },
    { id: 4, title: 'Ноутбук', count: 13, price: 3000 },
    { id: 5, title: 'Планшет', count: 22, price: 2100 },
];
// function findMaxPrice(arr_005: arr[]): arr {
//     let maxPrice = arr_005[0];
//     for (let i = 0; i < arr_005.length; i++) {
//         if (arr_005[i].price > maxPrice.price) maxPrice = arr_005[i]
//     }
//     return maxPrice
// }
// const result_005 = findMaxPrice(arr_005);
// console.log(result_005);
function findMaxPrice(arr_005) {
    let maxPrice = arr_005[0];
    arr_005.forEach((el) => {
        if (el.price > maxPrice.price)
            maxPrice = el;
    });
    return maxPrice;
}
const result_005 = findMaxPrice(arr_005);
console.log(result_005);

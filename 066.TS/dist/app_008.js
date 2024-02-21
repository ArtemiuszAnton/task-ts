// 8. У вас есть массив строковых значений почт. Необходимо вывести значения
// массива без дубликатов. Добавить проверки на тип данных, почту
const arr_008 = ['string.mail@gamil.com', 'string.mail@gamil.com', 'string.mail.com', 'string.mail.com', 'string.mail@gamil.999'];
const newArr = [];
arr_008.forEach((el) => {
    if (newArr.indexOf(el) === -1 && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el))
        newArr.push(el);
});
console.log(newArr);

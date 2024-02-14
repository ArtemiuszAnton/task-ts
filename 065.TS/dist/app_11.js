// 11. На входе динамичный массив строк. Используя every выведите true если все
// элементы массива соответствуют регулярному выражению почты
const arr_11 = ['dsdsdsds@gmail.com', 'asdasda@list.ru'];
const checkEmail = arr_11.every((el) => {
    if (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/gm.test(el))
        return true;
});
console.log(checkEmail);

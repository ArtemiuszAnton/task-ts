// 15. На входе динамичный массив строк. Используя forEach создайте новый массив из
// элементов, каждое значение которого имеет вид !name
// [“hschool”, “company”] -> [“!hschool”, “!company”]
const arr_15 = ['asasasa', 'sasassa', 'ssasaas'];
const res_15 = [];
arr_15.forEach((el) => {
    res_15.push(`!` + el);
});
console.log(res_15);

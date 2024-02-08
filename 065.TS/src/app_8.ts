// 8. Создайте массив строк и проверьте, есть ли в нем хотя бы одно слово-палиндром.

const arr_8: string[] = ['annA', 'hannah', 'gg', 'table'];

const res_8=arr_8.filter((el)=>{
    return el.toLowerCase().reverse() == el.toLocaleLowerCase()
})
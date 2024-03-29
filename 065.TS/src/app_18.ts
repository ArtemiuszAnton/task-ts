// 18. Создайте массив объектов, представляющих книги, и найдите книгу где автор
// Булгаков (author – одно из полей объекта)


interface Books {
    id: number,
    author: string,
    title: string
}

const objArr: Books[] = [
    { id: 1, author: 'Автор', title: 'Название автора' },
    { id: 2, author: 'Булгаков', title: 'Мастер и Маргарита' },
    { id: 3, author: 'Автор', title: 'Название автора' }
]

const res_18 = objArr.filter((el) => {
    return el.author == 'Булгаков'
})


console.log(res_18);



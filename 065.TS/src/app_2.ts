// 2. Создайте массив строк и выведите на экран все элементы, которые содержат
// букву 'a'.


const arr_2: string[] = ['raz', 'dwa', 'tri'];

for (let i = 0; i < arr_2.length; i++) {
    if (arr_2[i].includes('a')) console.log(arr_2[i]);
}
// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.


const str: string | string[] = 'antananarivu';
const obj = {};
let maxLiters;
let maxEntries = 999;

for (let i = 0; i < str.length; i++) {
    if (obj.hasOwnProperty(str[i])) {
        obj[str[i]]++
    } else {
        obj[str[i]] = 1
    }
}

for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        const elem = obj[key];
        if (elem > maxEntries) {
            maxLiters = key;
            maxEntries = elem
        }
    }
}


console.log(maxLiters);

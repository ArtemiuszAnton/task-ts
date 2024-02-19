// 14. Напишите программу, которая находит и выводит наиболее часто встречающийся
// символ в заданной строке.


// const str: string | string[] = 'antananarivu';
// const obj = {};
// let maxLiters;
// let maxEntries = 0;

// for (let i = 0; i < str.length; i++) {
//     if (obj.hasOwnProperty(str[i])) {
//         obj[str[i]]++
//     } else {
//         obj[str[i]] = 1
//     }
// }

// for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//         const elem = obj[key];
//         if (elem > maxEntries) {
//             maxLiters = key;
//             maxEntries = elem
//         }
//     }
// }


// console.log(maxLiters);



// a = 1
// e =2
// o = 3
// i = 4

// const str = 'EwqgtsgAsrfgtreoEgeawdxAgzhdszae'.split('');
// let sum = 0;

// for (let i = 0; i < str.length && sum <= 11; i++) {
//     // if (sum > 11) break;
//     switch (str[i].toLowerCase()) {
//         case 'a':
//             sum += 1
//             break;
//         case 'e':
//             sum += 2
//             break;
//         case 'o':
//             sum += 3
//             break;
//         case 'i':
//             sum += 4
//             break;
//         default:
//             break;
//     }
// }

// console.log(sum);


// const arr = [323, 2, 45, 7, 8, 96, 34, 2, 3, 5, 9, 10];
// let ress = arr.map((el) => { return el % 2 == 0 ? el / 2 : 0 })
// let resss = ress.some((el) => {
//     return el % 6 == 0
// })

// if (resss) {
//     const summa = ress.reduce((sum, el) => {
//         return sum += el
//     }, 0)
//     console.log(summa);

// } else {
//     const sumZer = ress.filter((el) => {
//         return el === 0
//     });
//     console.log(sumZer.length);
// }

// arr.forEach((el) => {
//     if (el % 2 == 0) {
//         ress.push(el / 2)
//     } else {
//         ress.push(0)
//     }
// })

// console.log(ress);

// class Polymorph {
//     test(a, b) {
//         return a + b
//     }
// }

// class Test extends Polymorph {
//     test(a, b) {
//         return a - b
//     }
// }


// RECURSION 

const arr_123 = [1, 2, 3, 4, 6, 8];
let count = 0;

function sumElems(arr_123) {
    if (count === arr_123.length) return count;
    count++
    return sumElems(arr_123)
}

const res_123 = sumElems(arr_123);
console.log(res_123);

// ЗАМЫКАНИЕ 

function getSum() {
    let resSum = 0
    return (a) => {
        resSum += a
        console.log(resSum);
    }
}

const res__ = getSum()
res__(4);
res__(4);
res__(4);

// КАРРИРОВАНИЕ

function sumLiters(a) {
    return (b) => {
        return (c) => {
            return a + b + c
        }
    }
}

console.log(sumLiters(1)(4)(8));



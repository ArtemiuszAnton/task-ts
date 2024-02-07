// Напишите программу, которая проверяет, является ли заданная строка
// палиндромом.


const palindrom: string = "ANNA";


if (palindrom.split('').reverse().join('') == palindrom){
    console.log('Ok');
} else{
    console.log('Not ok');
    
}
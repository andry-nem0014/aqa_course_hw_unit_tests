/*

Напишите программу, которая принимает целое положительное число n (одно любое число от 1 до 9), и выводит сумму равную 
n + nn + nnn, где n не перемножаются, а конкатенируются

*/
const n = 2;
const sumConcatination = (number) => {
  if (n >= 1 && n <= 9 && n % 1 === 0) {
    console.log(
      String(n) + String(number * 10 + number) + String(number * 100 + number * 10 + number),
    );
  } else {
    console.log('Передайте целое число от 1 до 9!');
  }
};
sumConcatination(n);
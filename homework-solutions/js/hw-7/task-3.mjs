/*
  digitalRoot
  Напишите рекурсивную функцию, которая принимает на вход число и складывает его цифры. 
  Если сумма получилась больше 9 - снова сложите цифры.
  И так пока, сумма не станет меньше либо равной 9. 
  После окончания сложений возвращает полученное число.
  Например при подаче числа 19 (1+9=10>9, потому 1+0=1) выводится 1

*/

function digitalRoot(number) {
  // Ваш код
const numberArrString = String(number).split('')
const numberArrNumber = []

for (const num of numberArrString) {
  numberArrNumber.push(Number(num))
}

let sumNumber = 0
for (const num of numberArrNumber) {
    sumNumber += num
}


if (sumNumber <= 9 ) return sumNumber
return digitalRoot(sumNumber)
}


export { digitalRoot };

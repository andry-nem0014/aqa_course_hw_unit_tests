/*
  Создайте функцию, принимающую число n, которая при каждом вызове будет
  генерировать случайное число [1 - n] включительно. 
  Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах). 
  И так пока не переберутся все n чисел. На n + 1 вызов и
  далее функция должна возвращать 'All numbers were received'. 
  Задачу решить через замыкания
  Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

  Рекоммендации:
   - Для генерации числа в границах воспользуйтесь методом:
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

*/

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function uniqueRandomGenerator(n) {
  const arrIntNum = [];
  return () => {
    if (arrIntNum.length === n || !n) return 'All numbers were received';
  
    let randNum;
    let isDuble = true;

    while (isDuble) {
      randNum = parseInt(getRandomArbitrary(1, n + 1))
      isDuble = arrIntNum.find((el) => el === randNum)
    }
    
    arrIntNum.push(randNum);
    //console.log('Массив:', arrIntNum, 'Сгенерировано:', randNum);
    return randNum
  };
}

export { uniqueRandomGenerator };
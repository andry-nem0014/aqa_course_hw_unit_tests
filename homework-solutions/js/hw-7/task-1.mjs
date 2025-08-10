/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...arrArrays) {
  // Ваш код
  let resultArray = [] 
  for ( const array of arrArrays) {
    resultArray.push(...array)
  }
  return resultArray
}
/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  // Ваш код
  
  const arr = sentence.split(' ')
  const cleanArr = []
  const resuultArray = [];
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
    cleanArr.push(arr[i])
    }
  }

  for (const str of cleanArr) {
    if (cleanArr.indexOf(str) === 0) {
      resuultArray.push(str.toLowerCase())
    } else {
      resuultArray.push(str[0].toUpperCase() + str.slice(1).toLowerCase())
    }
  }

  return resuultArray.join('_')
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  const fib = [0, 1]
  let num = 0

  for (let i = 1; i <= n; i++) {
    if (i <= 0) num = 0
    if (i === 1 || i === 2) {
      num = 1
    } else {
    fib.push(num)
    num = fib[i - 2] + num
    }
  }
  return num  
}


export { mergeArrays, fibonacci, devideBy };

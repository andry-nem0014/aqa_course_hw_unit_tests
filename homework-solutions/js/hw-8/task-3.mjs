/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  // Ваш код
  
  let stopSum = false
  const sortArr = [...numbers].toSorted((a,b) => a - b)
  console.log(sortArr)
  const num = sortArr.reduce(
  (result, element, index, array) => {
    if (stopSum) return result

    if (array[0] !== 1 && !stopSum ) {
      stopSum = true
      return 1
    }
    
    if (element - array[index-1] > 1 ) {
      stopSum = true
      return array[index-1] + 1
    }

    if (index === array.length - 1 && !stopSum) {
      result = array.length + 1
      return result
    }
  } , 0
  )
  return num
}

export { findMissingNumber };

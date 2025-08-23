/*
  У вас есть массив чисел. 
  Напиши функцию countOccurrences, которая принимает массив чисел и
  возвращает объект с подсчётом каждого числа.
  const numbers = [1, 2, 2, 3, 4, 4, 4, 5];
  
  Ожидается: { 1: 1, 2: 2, 3: 1, 4: 3, 5: 1 }
*/

function countOccurrences(arr) {
  return arr.reduce((acc, element) =>{
    if (!acc[element]) acc[element] = 0;
    acc[element]++
    return acc
  },{})
}

export { countOccurrences };
  // **Решение через цикл:**
  //
  // const counts = {}
  // for (const num of arr)  {
  //   if (!counts[num]) {
  //     counts[num] = 0
  //   }
  //   counts[num]++
  //   console.log(counts)
  // }
  // return counts
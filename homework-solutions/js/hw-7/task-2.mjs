/*
 1. isPalindrom
 Написать функцию, которая принимает на вход слово и проверяет, является ли это слово палиндромом
*/

function isPalindrom(word) {
  // Ваш код
  if (typeof(word) !== 'string' ) return false
  if (word === '') return true
  
  const arrLetter = word.toLowerCase().split('')
  const lastArrIndex = arrLetter.length - 1
  
  for (let i = 0; i < arrLetter.length; i++ ) {
    if (arrLetter[i] === arrLetter[lastArrIndex - i] ) {
      return true
    } else {
      return false
    }
  }
}

/*
 2. findLongestWords()
 Написать функцию, которая принимает предложение (слова разделенные только пробелами) в качестве параметра 
 и возвращает слово с наибольшим количеством букв. 
 Если таких слов несколько - возвращает их все.
*/

function findLongestWords(sentence) {
  // Ваш код
  const maxNumsArr = []
  if (!sentence || typeof sentence !== 'string') return maxNumsArr
  
  const arr = sentence.split(' ')
  const lengthArr = []
  const newArr = []
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i]){
    newArr.push(arr[i])
    lengthArr.push(arr[i].length)
    }
  }

  const draftMaxNum = Math.max(...lengthArr)

  for (let i = 0; i < newArr.length; i++) {
    if (draftMaxNum === newArr[i].length) {
      maxNumsArr.push(newArr[i])
    }
  }
  
  
  return maxNumsArr
}

export { isPalindrom, findLongestWords };

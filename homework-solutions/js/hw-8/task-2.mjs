/*
  sortedByVowels
  Напишите функцию, которая принимает на вход массив слов и
  возвращает отсортированный массив по следующему критерию: количество гласных букв.
  Массив должен быть отсортирован по возрастанию количества гласных букв в слове.
 */

const words = [
  'umbrella',
  'apple',
  'ocean',
  'independent',
  'education',
  'elephant',
  'island',
  'universe',
  'environment',
  'queue',
];

function sortedByVowels(wordsArr) {
  // Ваш код
  const vowels = 'aeiouy'.split('')
  
    const sortedArr = wordsArr.toSorted((a, b) =>  
    a.split('').filter(el => vowels.includes(el)).length - 
    b.split('').filter(el => vowels.includes(el)).length
    )

    return sortedArr
}

export { sortedByVowels };
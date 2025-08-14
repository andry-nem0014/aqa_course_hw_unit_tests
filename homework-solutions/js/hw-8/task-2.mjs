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

function countVowels(word) {
  const vowels = 'aeiouy'.split('')
  return word.split('').filter(el => vowels.includes(el)).length
}

function sortedByVowels(wordsArr) {
  // Ваш код
    const sortedArr = wordsArr.toSorted((a, b) => countVowels(a) - countVowels(b))
    return sortedArr
}

export { sortedByVowels };
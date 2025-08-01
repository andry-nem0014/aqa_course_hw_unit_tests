/**
 * Создать строку с информацией о количестве гласных и согласных букв в слове.
 * Переменная `word` уже создана и содержит строку со словом.
 * Ожидаемый результат для `hello`: "hello contains 2 vowels and 3 consonants".
 */
const word = 'hello';
const vowels = 'аеёиоуыэюяaeiouy' + 'аеёиоуыэюяaeiouy'.toUpperCase()

let sumVowels = 0;
let sumConsonants = 0;
let vowelsAndConsonantsResult = '';

for (i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
        sumVowels++
    } else {
        sumConsonants++
    }
}

vowelsAndConsonantsResult = `${word} contains ${sumVowels} vowels and ${sumConsonants} consonants`

export { vowelsAndConsonantsResult };

/**
 * Сложить строку с четными числами от 10 до 0, разделенными `-` в переменную evenNumbersResult.
 * Переменная для результата `evenNumbersResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: '10-8-6-4-2-0'
 */

let evenNumbersResult = '';
for (let i = 10; i >= 0; i--) {
  if (i % 2 === 0) {
    if (i < 10) {
      evenNumbersResult += '-';
    }
    evenNumbersResult += i;
  }
}

/**
 * Создать строку из 5 строк с увеличивающимся количеством смайликов ":)".
 * Переменная для результата `smilePatternResult` уже создана и содержит пустую строку.
 * Ожидаемый результат:
 * :)
 * :):)
 * :):):)
 * :):):):)
 * :):):):):)
 */
let smilePatternResult = '';
const numIteration = 5
for (let i = 1; i <= numIteration; i++ ) {
    for (let j = 1; j <= i; j++) {
        smilePatternResult += ':)'
    }
    if (i < numIteration) {
        smilePatternResult += '\n'
    }
}

console.log(smilePatternResult);

/**
 * Заменить все пробелы в переменной text на "1".
 * Переменная для результата `replaceSpacesWithOneResult` уже создана и содержит пустую строку.
 * Ожидаемый результат: 'Hello!1I1am1a1JS1student!'
 */
const text = 'Hello! I am a JS student!';
let replaceSpacesWithOneResult = '';
replaceSpacesWithOneResult = text.replaceAll(' ', '1');

export { evenNumbersResult, smilePatternResult, replaceSpacesWithOneResult };

console.log(':):):):):)'.split(':)').length - 1);

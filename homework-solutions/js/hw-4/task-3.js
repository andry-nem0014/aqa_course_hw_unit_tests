/*

(НЕ ОБЯЗАТЕЛЬНО)

Преобразовать Task 2 таким образом, чтобы значение НАПРИМЕР '2' (т.е. ЛЮБАЯ строка в которой лежат ТОЛЬКО ЦИФРЫ) пропускалось, 
  преобразовываясь в number

*/

  let minAge = 18;
  let maxAge = 60;
  let age = 'asdasd';

  switch (typeof age) {
      case 'string':
        if (!Number(age)){
          console.log('Incorrect data type')
          break
        } else {
          Number(age)
        }
      case 'number':
        if (age < minAge) {
          console.log("You don't have access cause your age is " + age + " It's less then ")
          } else if (age >= minAge && age < maxAge) {
            console.log("Welcome  !")
          } else if (age > maxAge){
            console.log("Keep calm and look Culture channel")
          } else {
            console.log("Technical work")
          };
        break;
      default:
        console.log("Incorrect data type")
      }

//TODO: избежать использования console.log("Incorrect data type") дважды
  
  
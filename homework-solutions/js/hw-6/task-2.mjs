/*
  У вас есть массив названий пицц вашего конкурента.
  Создайте скрипт с циклом, который будет проверять ваш набор названий пицц (массив) 
  и набор названий пицц конкурента (массив), пицц которых нет у конкурента присвойте в переменную "resultUnique" (массив).
  Если все ваши пиццы есть у конкурента результатом будет "null" присвойте в переменную "resultNull".

  Скрипт не должен зависеть от регистра, в котором указаны названия пицц у вас и конкурента
  Воспользуйтесь наборами пицц, что приведены ниже.

  Пиццы:
  const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai']
  const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
  const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
*/

let resultUnique = [];
let resultNull = [];

const competitorPizzas = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];
const myPizzasT1 = ['Peperoni', 'Margherita', 'Diablo', 'Vegetarian'];
const myPizzasT2 = ['Peperoni', 'Caprichosa', 'Diablo', '4 cheeses', 'hawai'];

const allPizzas = [myPizzasT1, myPizzasT2]

const lowerCasePizzas = []
for (const pizza of competitorPizzas) {
  lowerCasePizzas.push(pizza.toLowerCase());
}

for (const pizzas of allPizzas) {
  
  let intermediatePizza = [...resultUnique]
  
  for (const pizza of pizzas) {
  if (lowerCasePizzas.indexOf(pizza.toLowerCase()) === -1) {
    resultUnique.push(pizza)
    }
  }

  if (intermediatePizza.length === resultUnique.length) {
    resultNull = null
  }

}

console.log(resultUnique)
console.log(resultNull)

// const lowerCasePizzas = []
// let i = 0
// for (const pizza of competitorPizzas) {
//   lowerCasePizzas[i] = pizza.toLowerCase()
//   i++
// }

// let intermediatePizza = [...resultUnique]

// for (const pizza of myPizzasT1) {
//   if (lowerCasePizzas.indexOf(pizza.toLowerCase()) === -1) {
//     resultUnique.push(pizza)
//   }
// }

// if (intermediatePizza.length === resultUnique.length) {
//   resultNull = null
// }

// intermediatePizza = [...resultUnique]

// for (const pizza of myPizzasT2) {
//   if (lowerCasePizzas.indexOf(pizza.toLowerCase()) === -1) {
//     resultUnique.push(pizza)
//   }
// }

// if (intermediatePizza.length === resultUnique.length) {
//   resultNull = null
// }

export { resultNull, resultUnique };

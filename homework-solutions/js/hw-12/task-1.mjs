/*
1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
  его резолва в консоль
3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed". 
  Обработайте промис методом .catch и выведите результат его резолва в консоль
4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль результаты работы каждого промиса через .then
6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
  в консоль статус и результат каждого промиса через .then
7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch
*/

// ===== 1 =====

function delayTwoSeconds(callback) {
    setTimeout(callback, 2000) 
}

function inConsole() {
    console.log("after 2 sec")
}

delayTwoSeconds(inConsole)

// ===== 2 =====

const myPromise1 = new Promise ((res, rej) => {
    res(1);
})

myPromise1.then((result) => console.log(result))

// ===== 3 =====

const myPromise2 = new Promise ((res, rej) => {
    rej("Promise failed")
})

myPromise2.catch((result) => console.log(result))

// ===== 4 =====

function promiseNumber(number) {
    return new Promise(res => {
        res(number);
        })
}

// ===== 5 =====

Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((result) => result.forEach(number => console.log(number)))

// ===== 6 =====

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
.then((result) => result.forEach(number => console.log(`Status: ${number.status}, value: ${number.value}`)))

// ===== 7 =====

function promiseNumber(number) {
    return new Promise(res => {
        res(number);
        })
}

async function promisFunc(func) {
        try {

        const res = await func
        if (typeof(res) != "number") throw new Error("you neeeed only number")
        return res
        } catch (error) {
            console.error(error.message)
            throw error
        }
}

async function asyncPromFunc(...array) {
    const array1 = array.map(element => promisFunc(element))
    const result = await Promise.allSettled(array1);
    console.log(result);
    
}

const testArrow = [promiseNumber("a"), promiseNumber(2), promiseNumber(3)]
asyncPromFunc(testArrow)




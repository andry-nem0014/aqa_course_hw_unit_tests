/*
Напишите функцию, реализующую метод массивов map(сам мэп юзать нельзя, надо написать кастомный:). Функция принимеют на вход массив и колбэк. Используйте дженерик типы. 
   Затипизировать надо саму функцию и коллбэк.
   Создать реализацию функции map, принимающую массив чисел 1-5, возвращающую новый массив, 
   где каждый каждый элемент - это элемент исходного массива умноженный на его индекс
   Пример:
   map([1,2,3,4,5], callback) => [0,2,6,12,20]

*/

type OneToFive = 1 | 2 | 3 | 4 | 5;

type MapCallback<T, U> = (element: T, index: number) => U

const callback: MapCallback<OneToFive, number> = (element, i) => element * i;

function map<T extends OneToFive, U>(array:Array<T>, callbackFunk: MapCallback<T, U>): U[] {
    const newArr: U[] = []
    for (let i = 0; i < array.length; i++) {
        newArr.push(callbackFunk(array[i], i))
    }
    return newArr
}

console.log(map([1,2,3,4,5], callback))
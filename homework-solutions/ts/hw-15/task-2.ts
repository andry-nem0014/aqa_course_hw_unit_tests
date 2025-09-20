/*
Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ, соответствующий этому значению. 
Если значение не найдено, функция должна возвращать undefined.
Используйте keyof для типизации ключей объекта
*/

function getKeyByValue<T extends object>(obj: T, value: T[keyof T]): keyof T | undefined {
    for (const key in obj) {
        if (obj[key] === value ){
            return key
        }
        
    }
}

const andryEmploye = {
    name: "andry",
    age: 35,
    isQa: true
}

console.log(getKeyByValue(andryEmploye, 35))
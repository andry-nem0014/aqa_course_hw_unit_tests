/*
1. Создайте дженерик функцию wrapInArray, которая принимает значение любого типа и возвращает его в виде массива этого типа.
*/

function wrapInArray<T>(value:T):Array<T> {
        return [value]
    }
    
    const numberArray = wrapInArray(5); // [5]
    const stringArray = wrapInArray('Hello'); // ['Hello']

    /*
2. Создайте дженерик функцию getLastElement, которая принимает массив элементов типа T, и возвращает последний элемент (типа T).
*/
    function getLastItem<T>(array:Array<T> ):T {
      return array[array.length - 1]
    }

    console.log(getLastItem([1, 2, 3, 4])); // 4
    console.log(getLastItem(['a', 'b', 'c'])); // 'c'

/*
3. Создайте дженерик интерфейс IPair, который принимает два типа T и U и содержит поля first: T и second: U. 
   Реализуйте функцию, принимающую IPair и возвращающую строку, описывающую пару.
*/
    interface IPair<T, U> {
      first: T,
      second: U
    }

    function describePair<T, U>(pair: IPair<T, U>):string {
      return `${pair.first} and ${pair.second}`
    }

    console.log(describePair({ first: 'Alice', second: 30 })); // "Alice and 30"
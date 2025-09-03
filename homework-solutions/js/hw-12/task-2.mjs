/*
Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
   Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
   После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
   Преобразуйте респонс из JSON в объект
   Проверьте, что айди в респонсе === 201
   Функция должна возвращать полученный объект из респонса
   Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена
*/
const baseUrl = "https://jsonplaceholder.typicode.com/todos";

async function createTodo({ userId, title, completed }) {
    try {
        const response = await fetch(baseUrl, {
            method: "post",
            body: {
                userId,
                title,
                completed,
            },

        });

        if (response.status !== 201) throw new Error ("wrong status-code")
        const body = await response.json();
        return body;
    
    } catch(error) {
        console.error(error.message);
        
    }
}

async function createTodosBulk(...todos) {
    
    try {
    const array = todos.map((todo) => createTodo(todo));
    const result = await Promise.allSettled(array);
    const finalResult = result.filter(el => {
        if (el?.value?.id !== 201) return el
    })
    if (finalResult.length > 0) throw new Error ("wrong id") 
    result.forEach(el  => console.log(el));
    } catch(error) {
        console.error(error.message);
    } finally {
        console.log("finita")
    }
}

createTodosBulk(
  { userId: 1, title: "1", completed: false },
  { userId: 2, title: "2", completed: false },
  { userId: 3, title: "3", completed: false },
  { userId: 4, title: "3", completed: false },
  { userId: 5, title: "3", completed: false },
);
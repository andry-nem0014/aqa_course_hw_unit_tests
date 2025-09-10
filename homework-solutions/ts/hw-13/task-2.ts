/*
Создайте функцию validatePassword, которая принимает строку (пароль) и возвращает true, 
если пароль соответствует следующим правилам:
  - Пароль должен содержать хотя бы одну заглавную букву.
  - Пароль должен содержать хотя бы одну букву в нижнем регистре.
  - Пароль должен содержать хотя бы одну цифру.
  - Пароль должен быть не менее 8 символов.
  - Пароль не должен состоять из одних пробелов
Функция должна возвращать false, если хотя бы одно из условий не выполнено.
*/

function validatePassword(password: string):boolean {
    if (password.length < 8) return false
    
    let validateNumber = false
    let validateUpperCase = false
    let validateLowerCase = false
    let ValidateNoEmpty = false
    
    for (let i = 0; i < password.length; i++) {
        if (Number(password[i])) validateNumber = true
        if (password[i] >= 'A' && password[i] <= 'Z') validateUpperCase = true
        if (password[i] >= 'a' && password[i] <= 'z') validateLowerCase = true
        if (password[i] !== ' ') ValidateNoEmpty = true
    }

    return validateNumber && validateUpperCase && validateLowerCase && ValidateNoEmpty
}

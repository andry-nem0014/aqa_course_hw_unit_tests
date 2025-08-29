class Employee {
  // Ваш код
   #salary;
  constructor(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#salary = salary;
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 
      || !([...value].every(char => char.match(/[A-Za-z]/)))) throw new Error("invalid firstName");
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== 'string' || value.length < 2 || value.length > 50 
      || !([...value].every(char => char.match(/[A-Za-z]/)))) throw new Error("invalid lastname");
    this._lastName = value;
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (!value || typeof value !== 'number' || value <= 0 || value >= 10000) throw new Error("invalid salary");
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Developer extends Employee {
  // Ваш код
  constructor(firstName, lastName, salary, programmingLanguages = [] ) {
    super(firstName, lastName, salary)
    this.programmingLanguages = [...programmingLanguages]
  }

  addProgrammingLanguage(language) {
    if (typeof language !== 'string' || !language || language.trim().length === 0 || !([...language].every(char => 
    char.match(/[A-Za-z\s]/)))) throw new Error("invalid language");
    this.programmingLanguages.push(language)
  }
}

class Manager extends Employee {
  // Ваш код
   constructor(firstName, lastName, salary, teamSize =0 ) {
    super(firstName, lastName, salary)
    this.teamSize = teamSize
  }

  increaseTeamSize(){
    return this.teamSize++
  }
}

class Designer extends Employee {
  // Ваш код
  constructor(firstName, lastName, salary, designTools = []) {
  super(firstName, lastName, salary)
  this.designTools = [...designTools]
  }
  
  addDesignTool(tool) {
    if (typeof tool !== 'string' || !tool || tool.trim().length === 0 || !([...tool].every(char => 
    char.match(/[A-Za-z\s]/)))) throw new Error("invalid tool");
    this.designTools.push(tool)
  }
}

class Company {
  #employees;
  constructor(title, phone, address) {
    this.title = title;
    this.phone = phone;
    this.address = address;
    this.#employees = []
  }

  get title() {
    return this._title;
  }
  set title(value) {
    this._title = value;
  }  
  
  get phone() {
    return this._phone;
  }
  set phone(value) {
    if (typeof Number(value) !== 'number') throw new Error("invalid phone");
    this._phone = value;
  }

  get address() {
    return this._address;
  }
  set address(value) {
    this._address = value;
  }

  addEmployee(employee){
    if (!(employee instanceof Employee)) throw new Error("Obj is not instanceof class Employee")
    
    const doubleEmployee = this.getEmployees().findIndex(emp => {
     return emp.firstName.toLowerCase() === employee.firstName.toLowerCase() 
     && 
     emp.lastName.toLowerCase() === employee.lastName.toLowerCase()
    })

    if (doubleEmployee !== -1) throw new Error("this people now in system")
    this.#employees.push(employee)
  }

  getEmployees(){
    const getEmp = [...this.#employees]
    return getEmp
  }

  getInfo() {
    const compInfo = `Компания: ${this.title}\nАдрес: ${this.address}\nКоличество сотрудников: ${this.#employees.length}`
    return compInfo
  }

  findEmployeeByName(firstName) {
    if (typeof firstName !== "string") throw new Error("invalid typeof 'firstName'")
    const findEmp = this.getEmployees().find(emp => emp.firstName === firstName )
    if (!findEmp) throw new Error(`employees ${firstName} not find`)
    return findEmp
  }

  removeEmployee(firstName){
    return this.#employees.splice(this.#getEmployeeIndex(firstName), 1)
  }

  getTotalSalary(){
    return this.getEmployees().reduce((totalSalary, employee) => totalSalary += employee.salary, 0)
  }

  getEmployeesByProfession(profession) {
    const findOfClassName = this.getEmployees().filter(prof => prof.constructor.name === profession)
    return [...findOfClassName] 
  }

  #getEmployeeIndex(firstName){
    const indexOfRemovEmp = this.#employees.findIndex(emp => emp.firstName === firstName)
    if (indexOfRemovEmp === -1) throw new Error(`employees ${firstName} not find`)
    return indexOfRemovEmp
  }

}

const company = new Company('Tech Corp', '123-456', 'Main Street');
const emp1 = new Designer('John', 'Doe',  3000);
const emp2 = new Manager('Jane', 'Smith', 5000);
const emp3 = new Developer('Mark', 'Brown', 4000, ['JavaScript'])
emp3.addProgrammingLanguage('Phyton')
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);


console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees());
console.log(company.getEmployeesByProfession("Developer"))
console.log(company);


export { Employee, Company, Designer, Developer, Manager };

class Employee {
  // Ваш код
  #salary;
  constructor(firstName, lastName, profession, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
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

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (typeof value !== 'string' || !value || value.trim().length === 0 || !([...value].every(char => 
    char.match(/[A-Za-z\s]/)))) throw new Error("invalid profession");
    this._profession = value;
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
      if (typeof value !== 'string') throw new Error("invalid title");
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
      if (typeof value !== 'string') throw new Error("invalid address");
      this._address = value;
    }
  
    addEmployee(employee){
      if (!(employee instanceof Employee)) throw new Error("Obj is not instanceof class Employee")
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

  #getEmployeeIndex(firstName){
    const indexOfRemovEmp = this.#employees.findIndex(emp => emp.firstName === firstName)
    if (indexOfRemovEmp === -1) throw new Error(`employees ${firstName} not find`)
    return indexOfRemovEmp
  }
}

const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
const emp2 = new Employee('Jane', 'Smith', 'Manager', 5000);
const emp3 = new Employee('Mark', 'Brown', 'Designer', 4000);

const company = new Company('Tech Corp', '123-456', 'Main Street');
company.addEmployee(emp1);
company.addEmployee(emp2);
company.addEmployee(emp3);

console.log(company.getTotalSalary()); // 12000
console.log(company.findEmployeeByName('Jane')); // Employee { firstName: 'Jane', ... }
company.removeEmployee('John');
console.log(company.getEmployees()); // [Employee, Employee]

export { Employee, Company };

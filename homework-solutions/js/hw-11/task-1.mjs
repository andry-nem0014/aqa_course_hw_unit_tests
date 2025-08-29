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
    if (typeof value !== 'string') {
      return;
    }
    this._firstName = value;
  }

  get lastName() {
    return this._lastName;
  }
  set lastName(value) {
    if (typeof value !== 'string') {
      return;
    }
    this._lastName = value;
  }

  get profession() {
    return this._profession;
  }
  set profession(value) {
    if (typeof value !== 'string') {
      return;
    }
    this._profession = value;
  }

  get salary() {
    return this.#salary;
  }
  set salary(value) {
    if (typeof value !== 'number' || value <= 0) throw new Error("invalid salary");
    this.#salary = value;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Company {
  // Ваш код
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
    if (typeof value !== 'number') throw new Error("invalid phone");
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
}

const company = new Company('Tech Corp', 123456, 'Main Street');
console.log(company)
const emp1 = new Employee('John', 'Doe', 'Developer', 3000);
console.log(emp1)
const emp2 = new Employee('Barbara', 'Johnson', 'QA', 2500);
console.log(emp2)
company.addEmployee(emp1);
console.log(company)
company.addEmployee(emp2);
console.log(company)
console.log(company.getEmployees()); // [Employee, Employee]
console.log(company.getInfo());

export { Employee, Company };

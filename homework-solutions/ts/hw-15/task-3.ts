// Task 3. Перед вами структура компани, и ниже представлены задания, относящиеся к ней.
// В заданиях по максимуму использовать методы массивов, создавать функции-помощники, выполняющие дополнительные действия,
// чтобы ваши функции выполняли строго одну работу. ЭТО ОЧЕНЬ ВАЖНО!

const enterprises = [
  {
    id: 1,
    name: "Предприятие 1",
    departments: [
      {
        id: 2,
        name: "Отдел тестирования",
        employees_count: 10,
      },
      {
        id: 3,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 4,
        name: "Администрация",
        employees_count: 15,
      },
    ],
  },
  {
    id: 5,
    name: "Предприятие 2",
    departments: [
      {
        id: 6,
        name: "Отдел разработки",
        employees_count: 50,
      },
      {
        id: 7,
        name: "Отдел маркетинга",
        employees_count: 20,
      },
      {
        id: 8,
        name: "Отдел охраны труда",
        employees_count: 5,
      },
    ],
  },
  {
    id: 9,
    name: "Предприятие 3",
    departments: [
      {
        id: 10,
        name: "Отдел аналитики",
        employees_count: 0,
      },
    ],
  },
];

// Задания:
// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников. Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**

// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

// 2. Написать функцию, которая будет принимать 1 аргумент (id отдела или название отдела и возвращать предприятие, к которому относится).

// Пример:
// getEnterpriseName(4)
// getEnterpriseName("Отдел маркетинга")

// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия

// Пример:
// addEnterprise("Название нового предприятия")

// 4. Написать функцию, которая будет добавлять отдел в предприятие. В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.

// Пример:
// addDepartment(1, "Название нового отдела")

// 5. Написать функцию для редактирования названия предприятия. Принимает в качестве аргумента id предприятия и новое имя предприятия.

// Пример:
// editEnterprise(1, "Новое название предприятия")

// 6. Написать функцию для редактирования названия отдела. Принимает в качестве аргумента id отдела и новое имя отдела.

// Пример:
// editDepartment(7, "Новое название отдела")

// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.

// Пример:
// deleteEnterprise(1)

// 8. Написать функцию для удаления отдела. В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.

// Пример:
// deleteDepartment(3)

// 9. Написать функцию для переноса сотрудников между отделами одного предприятия. В качестве аргумента принимает два значения: id отдела, из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).

// Пример:
// moveEmployees(2, 3)

type ItemWithId = {getId(): number};

//Сервисные методы для всех классов
class ServiceMethods {
    /*
        Задаем сервисный генератор который выдает id начиная с 1 для сквозной 
        идентификации сущностей    
    */
    private static nextId = 1;
    
    static getNextId(): number {
        return this.nextId++;
    }

    /*
        Задаем сервисный метод, который принимает массив обьектов, в которых есть метод getId(): number,
        и возвращает тот обьект, где item.getId() === id
    */
    static getItemById<T extends ItemWithId>(items: T[], id: number): T {
       const item = items.find(item => item.getId() === id)
       if (!item) throw new Error("invalid Id");
       return item
    }
}

interface IWithId {
    getId(): number;
}

interface IDepartmentData {
    id: number;
    name: string;
    employes_count: number
}

interface IDepartment extends IWithId {
    getName():string;
    getEmployesCount(): number;
    getData(): IDepartmentData
    addEmploye(quantity: number): void;
    removeEmploye(quantity: number): void;
    setEmployesCount(quantity: number): void;
    setName(newName: string): void;
}

abstract class AbstractDepartment {
    protected readonly id: number;

    constructor(
        protected name: string, 
        protected employes_count: number 
    ) {
        this.id = ServiceMethods.getNextId();
    }

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getEmployesCount(): number {
        return this.employes_count
    }

    getData(): IDepartmentData {
        return {
            id: this.id,
            name: this.name,
            employes_count: this.employes_count
        }
    }
}

//Департамент
class Department extends AbstractDepartment implements IDepartment {
    
    constructor(
        protected name: string,
        protected employes_count: number
    ){
        super(name, employes_count)
    }
    
    addEmploye(quantity: number): void {
        if (quantity <= 0) throw new Error("Quantity must be positive number");
        this.employes_count += quantity
    }

    removeEmploye(quantity: number): void {
        if (!this.employes_count) throw new Error("departmen have no employe!");
        if (this.employes_count - quantity < 0 ) throw new Error("department has few employes");
        this.employes_count -= quantity
    }

    setEmployesCount(quantity: number): void  {
        if (quantity <= 0) throw new Error("invalid quantity!");
        this.employes_count  = quantity
    }

    setName(newName: string): void  {
        if (!newName) throw new Error("invalid name!");
        this.name = newName
    }
}

interface IEnterpriseData {
    id: number;
    name: string;
    departments: IDepartmentData[]
}

interface IEnterprise extends IWithId {
    getName(): string;
    getAllDepart(): IDepartmentData[];
    getData():IEnterpriseData;
    getDepartment(value: number | string): IDepartmentData;
    getCountOfEmployes(): number;
    setName(newName: string): void;
    addDept(departName: string): void ;
    editDepartment(departId: number, newName: string): void;
    deleteDepartment(departId: number): void;
    moveEmployees(fromDepartId: number, toDepartId: number): void;
}

abstract class AbstractEnterprise {
    protected readonly id: number;
    protected departments: IDepartment[] = []


    constructor(
        protected name: string, 
        departments: IDepartment[]
    ) {
        this.id = ServiceMethods.getNextId();
        this.departments = departments
    }

    getId(): number {
        return this.id
    }

    getName(): string {
        return this.name
    }

    getAllDepart():IDepartmentData[] {
        return this.departments.map(dep => dep.getData())
    };

    getData(): IEnterpriseData {
        return {
            id: this.id,
            name: this.name,
            departments: this.departments.map(dep => dep.getData())     //маппим обьекты из массива департаментов, чтобы они соответствовали iDepartment[]
        }
    }

    getCountOfEmployes(): number {
        const countEmployes = this.departments.reduce((sum, department) => {
            return sum + department.getEmployesCount()},0)
        return countEmployes
    }

    getDepartment(value: number | string): IDepartmentData {
        switch (typeof value) {
            case "number":
                return this.getDepartmentById(value);
            case "string":
                return this.getDepartmentByName(value);
            default:
                throw new Error("you need pass ID or DepartmentName")
        }
    }

    protected getDepartmentById(id: number): IDepartmentData {
        const department = ServiceMethods.getItemById(this.departments, id)  
        return department.getData()
    }

    protected getDepartmentByName(nameOfDept: string): IDepartmentData {
        const department = this.departments.find(dep => dep.getName() === nameOfDept)
        if (!department) throw new Error("invalid Name")
        return department.getData()
    }
}

// Предприятие
class Enterprise extends AbstractEnterprise implements IEnterprise {
    
    constructor(
        protected name: string,
        ...departments: IDepartment[]
    ){
        super(name, departments);
        
    }

    addDept(departName: string): void {
        this.departments.push(new Department(departName, 0),)
    }
    
    setName(newName: string): void {
        if (!newName) throw new Error("invalid name!");
        this.name = newName
    }
    
    editDepartment(departId: number, newName: string): void {
        if (!departId || !newName) throw new Error("invalid departament ID or new departament name")
        const department = ServiceMethods.getItemById(this.departments, departId)
        if (department) department.setName(newName)
    }
    
    deleteDepartment(departId: number): void {
        const removeDepartment = ServiceMethods.getItemById(this.departments, departId)
        if (!removeDepartment) throw new Error("Enterprise have no departament with this ID")
        if (removeDepartment.getEmployesCount() !== 0) throw new Error("you can't delete a department with employees")
        const removeDepartmentIndex = this.departments.indexOf(removeDepartment)
        this.departments.splice(removeDepartmentIndex, 1)
    }

    moveEmployees(fromDepartId: number, toDepartId: number): void {
        const departmentFrom = ServiceMethods.getItemById(this.departments, fromDepartId)
        const departmentTo = ServiceMethods.getItemById(this.departments, toDepartId)
        if (!departmentFrom || !departmentTo) throw new Error("Enterprise have no departaments with this IDs")
        const countTransferEmployes = departmentFrom.getEmployesCount()
        departmentFrom.setEmployesCount(0)
        departmentTo.setEmployesCount(countTransferEmployes)
    }
}

interface ICompany {
    getLogFullCompanyInfo(): void     //1
    getEnterpriseName(value: number | string): string;  //2
    addEnterprise(enterpriseName: string): void     //3
    addDepartment(enterpriseId: number, departmentName: string ): void //4
    editEnterprise(enterpriseId: number, newEnterpriseName: string): void //5
    deleteEnterprise(enterpriseId: number): void //7
}

abstract class AbstractCompany {
    protected enterprises: IEnterprise[] = []
    
    constructor(enterprises: IEnterprise[]) {
        this.enterprises = enterprises;
    }

    getEnterpriseName(value: number | string): string {
        const enterprise = this.enterprises.find(ent => {
            try {
                ent.getDepartment(value); // если департамент есть — true
                return true;
            } catch {
                return false;
            }
        });

        if (!enterprise) throw new Error("Company has no this department");
        return enterprise.getName();
    }
}

//Компания
class Company extends AbstractCompany implements ICompany {
    
    constructor(...enterprise: IEnterprise[]) {
        super(enterprise);
    }

    getLogFullCompanyInfo(): void {
        this.enterprises.forEach((ent) => {
            console.log(`${ent.getName()} (${!ent.getCountOfEmployes() ? "нет" : ent.getCountOfEmployes()} сотрудников)`);
                ent.getAllDepart().forEach(dept => {
                console.log(`- ${dept.name} (${!dept.employes_count ? "нет" : dept.employes_count} сотрудников)`);
            })
        });
    }

    addEnterprise(enterpriseName: string, ): void {
        this.enterprises.push(new Enterprise(enterpriseName, ))
    }

    addDepartment(enterpriseId: number, departmentName: string ): void {
        const enterprise = ServiceMethods.getItemById(this.enterprises, enterpriseId )
        if (!enterprise) throw new Error("Company has no this enterprise Id");
        enterprise.addDept(departmentName)
    }

    editEnterprise(enterpriseId: number, newEnterpriseName: string): void {
        const enterprise = ServiceMethods.getItemById(this.enterprises, enterpriseId )
        if (!enterprise) throw new Error("Company has no this enterprise Id");
        enterprise.setName(newEnterpriseName)
    }

    deleteEnterprise(enterpriseId: number): void {
        const enterprise = ServiceMethods.getItemById(this.enterprises, enterpriseId )
        if (!enterprise) throw new Error("Company has no this enterprise Id");
        const enterpriseIndex = this.enterprises.indexOf(enterprise)
        this.enterprises.splice(enterpriseIndex, 1)
    }
}

// // Создать департаменты
// const dep1 = new Department("IT", 10);
// const dep2 = new Department("HR", 5);
// const dep3 = new Department("Marketing", 0);
// const dep4 = new Department("Administration", 4);
// const dep5 = new Department("Mechanic", 55);
// const dep6 = new Department("Loyers", 6);

// // Создать предприятия с департаментами
// const ent1 = new Enterprise("Enterprise 1", dep1, dep2);
// const ent2 = new Enterprise("Enterprise 2", dep3);
// const ent3 = new Enterprise("Enterprise 3", dep4, dep5, dep6);

// // Создать компанию с предприятиями
// const company = new Company(ent1, ent2, ent3);

// // Вывести всю структуру компании
// company.getLogFullCompanyInfo();
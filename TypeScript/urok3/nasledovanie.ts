class Person {
 
    name: string;
    constructor(userName: string) {
 
        this.name = userName;
    }
    print(): void {
        console.log(`Имя: ${this.name}`);
    }
}
 
class Employee extends Person {
 
    company: string;
   
 
       
        constructor(name: string, company: string) {
       
            super(name);
            this.company = company;
        }
    work(): void {
        console.log(`${this.name} работает в компании ${this.company}`);
    }
}
let bob: Employee = new Employee("Bob","");
bob.print();
bob.company = "МОМ";
bob.work();
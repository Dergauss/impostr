type Person = {name: string; age: number};
// расширяем псевдоним Person
type Employee = Person & {company: string};
 
let tom: Person = {name: "Tom", age: 36};
let bob: Employee = {name: "Bob", age: 41, company: "Microsoft"};
 
function printPerson(user: Person){
    console.log(`Name: ${user.name}  Age: ${user.age}`);
}
 
printPerson(tom);
printPerson(bob);
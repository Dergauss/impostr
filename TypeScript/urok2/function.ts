function add(a: number, b: number): number {
    return a + b;
}
let result = add(1, 2);
console.log(result);

function getName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}
 
let name1 = getName("Иван", "Кузнецов");

function getName2(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
  
let name2 = getName2("Иван", "Кузнецов");
console.log(name1); // Иван Кузнецов
name2 = getName2("Вася");
console.log(name2); // Вася

function getName3(firstName: string, lastName: string="Иванов") {
     
    return firstName + " " + lastName;
}
 
name1 = getName3("Иван", "Кузнецов");
console.log(name1); // Иван Кузнецов
name2 = getName3("Вася");
console.log(name2); // Вася Иванов


function defaultLastName(): string{
    return "Smith";
}
 
function getName4(firstName: string, lastName: string=defaultLastName()) {
     
    return firstName + " " + lastName;
}
 
name1 = getName4("Tom");
console.log(name1); // Tom Smith
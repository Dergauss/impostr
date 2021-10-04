let person = {name:"Tom", age:23};
console.log(person.name);
// альтернативный вариант получения свойства
console.log(person["name"]);
let person2: { name: string; age?: number } = { name: "Tom"};
if (person2.age !== undefined) {
     
    console.log(person2.age);
}

function printUser3(user: { name: string; age: number}) {
    console.log(`name: ${user.name}  age: ${user.age}`);
  }
  let tom2 = {age: 36, name: "Tom"};
   
  printUser3(tom2);


  function printUser2({name, age = 25}: { name: string; age?: number}) {
    console.log(`name: ${name}  age: ${age}`);
  }
   
  let tom777 = {name: "Tom3", age : 23};
  printUser3(tom777);     // name: Tom  age: 25
   
  let bob = {name: "Bob", age: 44};
  printUser3(bob);     // name: Bob  age: 44
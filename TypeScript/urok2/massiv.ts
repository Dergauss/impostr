let list: number[] = [10, 20, 30];
let colors: string[] = ["red", "green", "blue"];
console.log(list[0]);
console.log(colors[1]);

let names: Array<string> = ["Tom", "Bob", "Alice"];
console.log(names[1]);  // Bob

function printUsers(users: readonly string[]) {
    for(const user of users){
        console.log(user);
    }
}
 
function usersToString(users: ReadonlyArray<string>): String{
     
    return users.join(", ");
}
 
const people: readonly string[]= ["Tom", "Bob", "Sam"];
 
printUsers(people);
console.log(usersToString(people));
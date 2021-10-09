class User1 {
  
    name: string | undefined = "keks";
    age: number | undefined;
    print(){
        console.log(`name: ${this.name}  age: ${this.age}`);
    }
    toString(): string{
        return `${this.name}: ${this.age}`;
    }
}
 
let user = new User1();

user.age = 36;
user.print();
console.log(user.toString());


class User_constructor {
  
    name: string;
    age: number;
    constructor(userName: string, userAge: number) {
 
        this.name = userName;
        this.age = userAge;
    }
    print(){
        console.log(`name: ${this.name}  age: ${this.age}`);
    }
}
 
let user2 = new User_constructor("Billy", 36);
user2.print();
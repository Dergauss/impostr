let user: [string, number] = ["Tom", 36];
for(const prop of user){
    console.log(prop);
}

function printUser(user: [string, number]) {
    console.log(user[0]);
    console.log(user[1]);
}
let tom: [string, number] = ["Tom", 36];
printUser(tom);


// 2
/*function printUser(user: [string, number, boolean?]) {
 
    if(user[2]!==undefined){
        console.log(`name: ${user[0]}  age: ${user[1]}  isMarried: ${user[2]}`);
    }
    else{
        console.log(`name: ${user[0]}  age: ${user[1]}`);
    }
}
 
let bob: [string, number, boolean] = ["Bob", 41, true];
let tom: [string, number] = ["Tom", 36];
 
printUser(bob);
printUser(tom);*/


//3
/*function printMarks(marks: [string, ...number[]]){
     
    for(const mark of marks){
        console.log(mark);
    }
}
let math: [string, ...number[]] = ["Math", 5, 4, 5, 4, 4];
let physics: [string, ...number[]] = ["Physics", 5, 5, 5];
 
printMarks(math);
printMarks(physics);*/
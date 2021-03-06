function log(target: Object, method: string, descriptor: PropertyDescriptor){
        let originalMethod = descriptor.value;
        descriptor.value = function(...args: number[]){
            console.log(JSON.stringify(args));
            let returnValue = originalMethod.apply(this, args);
            console.log(`${JSON.stringify(args)} => ${returnValue}`)
            return returnValue;
        }
    }
     
    class Calculator{
     
        @log
        add(x: number, y: number): number{
            return x + y;
        }
    }
     
    let calc = new Calculator();
    let z = calc.add(4, 5);
    z = calc.add(6, 7);

    function readable(onlyRead : boolean){
 
            return function (target: Object, propertyKey: string, descriptor: PropertyDescriptor) {
                descriptor.writable = !onlyRead;
            };
        }
         
        class User {
         
            name: string;
            constructor(name: string){
                this.name = name;
            }
         
            @readable(false)
            print():void{
                console.log(this.name);
            }
        }
        let tom = new User("Tom");
        tom.print = function(){console.log("print has been changed");}
        tom.print();  // Tom
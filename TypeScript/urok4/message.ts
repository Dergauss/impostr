export default function hello() {
    console.log("Hello Typescript");
  }

  interface Device{
    name: string;
}
     
class Phone implements Device {
    name: string;
    constructor(n:string){
        this.name = n;
    }
}
     
function call(phone: Phone) : void{
    console.log("Make a call by", phone.name);
}
export {Device, Phone, call};
import hello from "./message.js";
hello();

import {Phone, call} from "./message";
let iphone: Phone = new Phone("iPhone X");
call(iphone);
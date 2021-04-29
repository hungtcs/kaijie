import { Ripple } from './ripple/index.js';

const element1 = document.getElementById('test1');
const element2 = document.getElementById('test2');
const ripple1 = new Ripple({ element: element1 });
const ripple2 = new Ripple({ element: element2 });
console.log(ripple1, ripple2);


export { ripple1, ripple2 };

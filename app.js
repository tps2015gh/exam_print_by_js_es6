// Import the add function from the math module
import { add } from "./math.js";
import {domq} from './domq.js';
import  * as drawer from './drawer.js';

 

// Use the add function
console.log(add(1, 2)); // Output: 3
// domq.getByQuerySelectorAndSetHTML("#root","This is root ");
drawer.setCanvasById("my-canvas");
// drawer.drawRec();
// drawer.drawRow4Col();

let y =10 ;
let step1 = 30; 
let maxA4mm = 210 ; 
for(let x = 0;x < maxA4mm ; x+=step1 ){
    if( (x % step1 ==0) || x== 0  ){
        drawer.strokeRecMM(x,y ,step1,step1);
        y+= 2;
    }
}

y = 60
for(let x = 0;x < maxA4mm ; x+=step1 ){
    if( (x % step1 ==0) || x== 0  ){
        drawer.strokeRecMmWithText(x,y ,step1,step1,"text1");
        y+= 2;
    }
}



"use strict";
//type inference -> we dont have to say to typescript about the data type ..it auto matically detect it
//number ..it can be interger also and decimal also
let digit = 90;
let second = 1.1;
let ans = digit + second; //type inference
console.log(digit + second); //91.1
console.log(ans); //91.1
console.log(typeof ans);
//string
let username = "lokeshn";
//boolean
let isvalid = true;
//deeply with number data type
//there is same way of initilizing integer , negative number , decimal number 
//special types in number
//NaN -> comes when calculation is invalid
let result = 0 / 0;
console.log(result); //NaN
//Infinity
let r = 10 / 0;
console.log(r); //Infinity
//Min and max value
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

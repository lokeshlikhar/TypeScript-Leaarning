//type inference -> we dont have to say to typescript about the data type ..it auto matically detect it
//number ..it can be interger also and decimal also
let digit:number = 90;

let second:number = 1.1;
let ans = digit + second; //type inference
console.log(digit+second); //91.1
console.log(ans); //91.1
console.log(typeof ans);

//string
let username : string = "lokeshn";

//boolean
let isvalid : boolean = true;


//deeply with number data type
//there is same way of initilizing integer , negative number , decimal number 
//special types in number

//NaN -> comes when calculation is invalid
let result:number = 0/0;
console.log(result); //NaN

//Infinity
let r:number = 10/0;
console.log(r); //Infinity

//Min and max value
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
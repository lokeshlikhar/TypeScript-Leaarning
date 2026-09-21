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


let result:number = 0/0;//NaN -> comes when calculation is invalid
console.log(result); //NaN

//Infinity
let r:number = 10/0;
console.log(r); //Infinity


console.log(Number.MAX_SAFE_INTEGER);//Min and max value
console.log(Number.MIN_SAFE_INTEGER);


//String data type -> 3 ways to declared
let firstName : string = "Lokesg";
let middleName : string = 'Nitin';
let lastName : string = `Likhar`;
console.log(firstName , lastName , middleName);
console.log(firstName+lastName+middleName);


//boolean
let isLoggedIn : boolean = true; //same like false

//null and undefined 
let userProfile : null = null; //null means internally empty value .. explicit value .. user assign it explicitly..it is object
let surname : string; //here declaration done ..but not having any value ..its type is primitive type


//any and unknow 
let data:any = "lokesh";
data = 34; //when used any .. means any type ..we can change its data type just like JS
let value : unknown = "kalpana"; // type-safe counterpart to any . unknow means ..jiski type ab tk pta nhi hai .. jb type pta chlegi tb koni kaam perform hoga
// console.log(value.toUpperCase()); // it will give error 
if(typeof value == "string"){ //phle type check krega 
    console.log(value.toUpperCase());
}

//never and void data type
//never means ..esi value jo kbhi exist hi nhi krti ..also when function is not completed .. and throwing err ..it does not return anything 
// function throwError(message : string):never{
//     throw new Error(message);
// }
// throwError("my error");

//void ..means function get completed but not returning any value 
function v():void{
    console.log("hello");
}
v();

//BigInt data type ..just like long in java but it has no limit and not support decimal ..last me n lgana jruri hai
//operation cannot be done betwn number and bigint.. also we can asisgn 651 digit in bignit
const bigNum: bigint = 12345678901234567890n;
console.log(typeof bigNum);
const b = BigInt(2723782328);
console.log(bigNum , b);

//symbol data type
//it is primitive data type ..that create a unique value
let id = Symbol("this is id");
console.log(id); // it will print its description  ..description use for debugging
let id2 : symbol = Symbol("this is description");
const user = {
    name : "lokesh", //normal key
    [id] : 123 // string key
}
console.log(user[id]);
console.log(user.name);

// Type Inference ..means ts automatically detect type of variable 
function add(a:number , b:number){
    return a+b;
}
const str = "joker"; //e.g of type inference
const ress = add(3,4); //automatically detect type
console.log(ress);

// Array..2 ways..operation (push , pop , length , map , filter , reduce )
let numbers : number[] = [89,87,73]; //type[]
console.log(numbers[2]);

let sg : Array<string> = ["lod" , "zod" , "k"]; //Array<Type>
console.log(sg[1]);

//multi type array
let dta : (string | number)[] = ["dta" , 233];

//tuples .. fixed data type for each element , fixed length as declare , fix format order
let emply : [string , number , string] = ["ll" , 23 , "ksk"]; // phle string in hoga then number hi.then string hi
//destructuring
let [usern , age , fristn] = emply;
console.log(usern);

//e.g ..use case in API response , function 
function getUserInfi():[string , number]{
    return ["rohit" , 45];
}

//enum
enum Direction {
    up = "north",
    down = "south",
    front = "east"
}
console.log(Direction.down);

//union ..variable can have multiple data type
let datafromdb : string | number = "lokesh";
let prisnt = (data : string | number)=>{ //type narrowing means.. telling what is data type to ts
    if(typeof data === "string"){
        console.log(data.toUpperCase());
    }else{
        console.log(data);
    }
}
prisnt("loke");

//intersection
type User = {
    username : string
}
type Admin = {
    admin : string[]
}
type AdminUser = User & Admin; //intersection
let a : AdminUser = {
    username : "lo",
    admin : ["sdd"]
}

//optional and default parameter in function
//option ..means ese parameter jo do ya mt do
function g(name ?:string){
    console.log(name);//if no argument pass ..it will print undefined ..but no error..and it must be the last parameter in function
}
//default parameter ..means if no value pass ..it will take default value
function gg(name : string = "guest"){
    console.log(name);
}
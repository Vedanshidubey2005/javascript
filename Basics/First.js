console.log("This is my first javascript program");
var a;
var b =8;
// console.log(a);   undefined
a=9;
a=b;
console.log(a);
console.log(b);
var c = 10;
var d=5;
var e ="Vedanshi ";

c=c+10;
d=d+5;
e=e+("Dubey");
console.log(c);
console.log(d);
console.log(e);

// This is my first javascript program
// 8
// 8
// 20
// 10
// Vedanshi Dubey

//parseint function 

function convertToInt(str){
    return parseInt(str);
}
console.log(convertToInt("78"));  //78

function convertToInt2(str){
    return parseInt(str,2);
}
console.log(convertToInt2("101"));      //5

//ternary operator

function vote(age){
  return  age>=18 ? "eligible": "not eligible";
}
console.log( vote(56));               //eligible

//multiple ternary operators 
function checksign(val){
    return val> 0 ? "positive" : val<0 ? "negative": "zero";
}
console.log( checksign(0));      //zero
console.log( checksign(-9));         //negative
console.log( checksign(9));            //positive

//let
let n1 = "jerry";
// let n2;                 //SyntaxError: Identifier 'n1' has already been declared
n1= "sherry";
console.log(n1);          //sherry

//scope
function scope(){
    "use strict";
    //  var i = "function scope";
     if(true){
       var i="block scope";
        console.log("block scope of i is",i)
     }
     console.log("function scope of i is", i);  //accessible outside if block
     return i;
}
scope();
//block scope of i is block scope
// function scope of i is block scope

function scope1(){
    "use strict";
     let i1 = "function scope";
     if(true){
       let i1="block scope";
        console.log("block scope of i is",i1)
     }
     console.log("function scope of i is", i1);
     return i1;
    }
scope1();
// block scope of i is block scope
// function scope of i is function scope

//const keyword --> cannot be reassigned

const str1 = "ert";
//str1="wer";            //TypeError: Assignment to constant variable.

//chnage array val declared with const
const s= [3,7,5];
function edit(){
    s[0]=1;
    s[1]=2;
    s[2]=3;
}
edit();
console.log(s);             //[ 1, 2, 3 ]

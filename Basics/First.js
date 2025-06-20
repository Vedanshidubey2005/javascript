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

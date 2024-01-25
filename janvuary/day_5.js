// let arr=[1,2,3,4,'hello','hii',true,false];
// function getString(item){
//   return typeof item==='string'
// }
// function getNumber(item){
//   return typeof item==='number'
// } 
// function getBool(item){
//   return typeof item==='boolean'
// }
 
//practice : create an array to store companies 'bloomberg',"microsoft"
//"uber","google","IBM","netflix"

// let arr= ['Bloomberg','Microsoft','Uber','Google','IBM','Netflix'];
// console.log(arr);
// arr.shift();
// arr.splice(2,1,'ola');
 //arr.push("Amazon")



 //Global execution contest


//  let val1 = 10;
//  let val2 = 5;
//  function addNum(num1,num2){
//     let total=num1+num2
//     return total;
//  }

//  let result1=addNum(val1,val2);
//  let result2=addNum(10,2);



function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    displayName();
  }
  init();
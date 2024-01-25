 //var a=5
 //var a=10
 //console.log(a)
 //let b=56
 //b=65
 //console.log(b)

 //const v=0
 //console.log(v)

 //let firstName='rihaan'
 //let lastName='vicky'
 //console.log(firstNmae+" "+lastName)
 //console.log(`${firstName}  ${lastName}


//for(let i in arr)
//{
//    console.log(i)
//}//

//for(let i=0;i<5;i++)
//{
   /// console.log(i)
//}

//  let arr=[1,2,3,4,5,6]
   
//      let new1=    arr.reduce((a,b)=>{
//    return a+b

//  })
//  console.log(new1)
 
//higher  order  function


// function outer(){
//     console.log('outer')
//     function inner(){
//       console.log('inner')
//     }
//     return inner
// }
//this will calling inner class

// let inner=outer()
// inner()






// let arr=[1,2,3,4,'hello','hii',true,false];
// function get(arr){
//   let res=[]
//   for(let item of arr){
//     if(typeof item ==='string'){
//       res.push(item)
//     }
//   }
//   return res
// }

// function getNumber(arr){
//   let res=[]
//   for(let item of arr){
//     if(typeof item ==='number'){
//       res.push(item)
//     }
//   }
//   return res
// }

// function getBool(arr){
//   let res=[]
//   for(let item of arr){
//     if(typeof item ==='boolean'){
//       res.push(item)
//     }
//   }
//   return res
// }
// console .log(get(arr));
// console .log(getNumber(arr));
// console .log(getBool(arr));

// optimization of lenghty code: by using high orderr function

let arr=[1,2,3,4,'hello','hii',true,false];
function getString(item){
  return typeof item==='string'
}
function getNumber(item){
  return typeof item==='number'
} 
function getBool(item){
  return typeof item==='boolean'
}

function get(arr,fn){
  let res=[]
  for(let item of arr){
    if(fn(item)){
      res.push(item)
    }
  }
  return res
}

console.log(get(arr,getString))
console.log(get(arr,getNumber))
console.log(get(arr,getBool))









// let gameNumber=25;
// let userName=prompt("guess the game number");
// while(userName != gameNumber){
//   userName= prompt("You entered wrong Number. Try again:")
// }
// console.log("congratulations,you Entered the right Number");




//
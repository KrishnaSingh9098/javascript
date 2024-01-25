//  let str= "akansha singh";

// let fullName = prompt("Enter your Fullname Without Spaces");
// let username="@"+ fullName + fullName.length;
//     console.log(username);


//arrays topic Apna College //
// let marks = [97,85,64,72,96];
// console.log(marks);
// console.log(marks.length)//property



let marks=[85,97,44,37,76,60];
let sum =0;
for(let val of marks){
    sum+=val;
}
let avg = sum/marks.length;
console.log(`Average marks of the class=${avg}`)
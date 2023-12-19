// console.log(this)
// function test(){
//     console.log("test")
// }
// window.test();
// test()

//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// script.js:3 test
// script.js:3 test


// console.log(this)
// let obj={
//     test(){
//         console.log("test")
//     },
// }
 
// obj.test();
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}
//test


// console.log(this)
// let obj={
//     test:()=>{
//     console.log("text")
//    }
// }
 
// obj.test();

//output above


// this.name="pc"
// let user={
//     name:"aravind samudrala",
//     age:23,
//     getDetails(){
//         console.log(this.name)
//     }
    
// }
// user.getDetails();
//aravind samudrala

// this.name="pc"
// let user={
//     name:"aravind samudrala",
//     age:23,
//     getDetails:()=>{
//         console.log(this.name)
//     }
    
// }
// user.getDetails();
//pc


 
// obj.test();

// this.name="pc"
// let user={
//     name:"aravind samudrala",
//     age:23,
//     childobj:{
//         fullname:"Prashanth",
//         getDetails(){
//             console.log(this.name,"and",this.fullname)
//         }
//     }
   
    
// }
// user.childobj.getDetails();

//undefined 'and' 'Prashanth'


// this.name="pc"
// let user={
//     name:"aravind samudrala",
//     age:23,
//     childobj:{
//         fullname:"Prashanth",
//         getDetails:()=>{
//             console.log(this.name,"and",this.fullname)
//         }
//     }
   
    
// }
// user.childobj.getDetails();

//pc and undefined



// let user={
//         name:"aravind samudrala",
//         age:23,
//         getDetails:()=>{
//             console.log(this.name)
//         }
        
//     }
// user.getDetails();
//pc


// let user={
//     name:"aravind samudrala",
//     age:23,
//     childobj:{
//         fullname:"Prashanth",
//         getDetails(){
//             console.log(this.name,"and",this.fullname)
//         }
//     }
   
    
// }
// user.childobj.getDetails();

// let user={
//     name:"aravind samudrala",
//     age:23,
//     getDetails(){
//         console.log(this)
//         let nestedArrow=()=>console.log(this)
        
//         nestedArrow();
//     }
    
// }
// user.getDetails();

//{name: 'aravind samudrala', age: 23, getDetails: ƒ}
//script.js:86 {name: 'aravind samudrala', age: 23, getDetails: ƒ}


// let user={
//     name:"aravind samudrala",
//     age:23,
//     getDetails:()=>{
//         console.log(this)
//         let nestedArrow=()=>console.log(this)
        
//         nestedArrow();
//     }
    
// }
// user.getDetails();



// let user={
//     firstname:"aravind samudrala",
  
//     getDetails(){
//     const firstname="prashanth"
//     return this.firstname;
//     }
    
// }
// console.log(user.getDetails());
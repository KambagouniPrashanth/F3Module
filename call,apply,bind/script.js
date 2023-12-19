/*let obj1={
    a:10,
}

function sayHello(){
    console.log(this)
}
sayHello();*/
//Window {window: Window, self: Window, document: document, name: '', location: Location, …}

/*let obj={
    a:10,
    b:"Prashanth",
}

function sayHello(arg1,arg2){
    console.log(this,"test1","test")
}
// sayHello(obj);
sayHello.call(obj)*/
// //bing object to sayhello function

// // Window {window: Window, self: Window, document: document, name: '', location: Location, …} 'test1' 'test'
// // script.js:16 {a: 10} 'test1' 'test'

/*let obj={
    name:"pc",
}

function sayHello(arg1,arg2){
    console.log(this,"test1","test")
}
// sayHello(obj);
sayHello.call(obj)
console.log(sayHello.__proto__)
console.log(sayHello.prototype)*/
//to know sayhello window object properties
// {constructor: ƒ}
// constructor
// : 
// ƒ sayHello(arg1,arg2)
// [[Prototype]]
// : 
// Object

/*let obj={
    name:"pc",
}

function sayHello(arg1,arg2,arg3){
    console.log(this,arg1,arg2,arg3)
}

sayHello.call(obj,"arving","amruth","kam")*/
//we can add as many args 

// {name: 'pc'}name: "pc"[[Prototype]]: Object 'arving' 'amruth'
// sayHello.apply(obj,["ram","raghv"])
// {name: 'pc'} 'arving' 'amruth'
// script.js:49 {name: 'pc'} 'ram' 'raghv

/*let obj={
    name:"pc",
}
function sayHello(arg1,arg2,arg3){
    console.log(this,arg1,arg2,arg3)
}

let arr=new Array("Prashanth","Kambagouni","Pro","runtime")
sayHello.apply(obj,arr)*/
//apply method take array as input

// {name: 'pc'} 'Prashanth' 'Kambagouni'

/*let obj={
    name:"pc",
}

function sayHello(arg1,arg2){
    console.log(this,arg1,arg2)
}
let updatedHello=sayHello.bind(obj,"prit")
console.log(updatedHello())//not return anything that why it is undefined*/

// new type of updatedHello
//  updatedHello=sayHello.bind("test",obj,"prit")




/*let obj={
    name:"pc",
}

function sayHello(arg1,arg2){
    console.log(this,arg1,arg2)
}
let updatedHello=sayHello.bind(obj)
console.log(updatedHello("test1","test2"))*/
////not return anything that why it is undefined

let obj={
    a:10,
    b:"Prashanth",
}

function sayHello(arg1,arg2){
    console.log(this,"test1","test")

}
// sayHello(obj);
sayHello.call(obj)
//creating mycall function function prototype
let obj1={
    a:10,
    
    fn:function(arg1,arg2){
        console.log(this,arg1,arg2)
    }
}
// obj1.fn("kiwi","orange")
// ...args method takes any number of arguments
Function.prototype.myCall=function(obj,...args){

   obj.fn=this;
   let res=obj.fn(...args)
   delete obj.fn;
   return res;
}
console.log(sayHello.myCall(obj1,"inki","pinki","ponki"))



function powerOf(x,y){
    let res=Math.pow(x,y)
	
	console.log(res)
	let ans=res.toFixed(2);
	console.log(ans)

	return ans;
}
powerOf(0,0)
powerOf(2.00,-2)
// powerOf(2.10,3)
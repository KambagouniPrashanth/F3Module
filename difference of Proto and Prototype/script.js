/*class BankAccount{
    customername;
    accountNumber;
    balance;
    constructor(customername,balance){
        this.customername=customername;
        this.accountNumber=Math.floor(Math.random()*1000000)
        this.balance=balance
    }
   deposit(amount){
    this.balance+=amount;
   }
}
console.log(BankAccount.prototype)*/

function BankAccount(customername,balance){
    this.customername=customername;
    this.accountNumber=Math.floor(Math.random()*1000000000);
    this.balance=balance;
    


}
BankAccount.prototype.test="test";
BankAccount.prototype.test2="test2";

BankAccount.prototype.deposit=function(amount){
    this.balance+=amount;
}

/*const pcAccount=new BankAccount("pc",500)
console.log(pcAccount)
pcAccount.deposit(4000)

const PrashanthAccount=new BankAccount("Prashanth",500)
console.log(PrashanthAccount)
PrashanthAccount.deposit(3000)*/

function SavingsAccount(customername,balance){
    BankAccount.call(this,customername,balance);
    this.tansLimit=1000;
    


}
SavingsAccount.prototype.deposit=function(amount){
    this.balance+=amount;
}

SavingsAccount.prototype.eduLoan=function(amount){
    console.log(`this much of ${amount} is granted education`)
}
/*let pvsavAcc=new SavingsAccount("Prashanth",500)
pvsavAcc.deposit(50000)

console.log(pvsavAcc)
pvsavAcc.eduLoan(40000)*/

// console.log(SavingsAccount.prototype.__proto__)

// //before below statement
// // avingsAccount {customername: 'Sravan', accountNumber: 620156164, balance: 1000, tansLimit: 1000}
// // accountNumber
// // : 
// // 620156164
// // balance
// // : 
// // 1000
// // customername
// // : 
// // "Sravan"
// // tansLimit
// // : 
// // 1000
// // [[Prototype]]
// // : 
// // Object
// SavingsAccount {customername: 'Sravan', accountNumber: 657711792, balance: 1000, tansLimit: 1000}
// accountNumber: 657711792balance: 1000customername: "Sravan"tansLimit: 1000[[Prototype]]: BankAccount
// //

SavingsAccount.prototype.__proto__=BankAccount.prototype;
//savingaccout inheriting the properties of bank

//after this statement saving account become child of bankaccount so if create instance of saving account
let prSavingAccount=new SavingsAccount("pr",1000)
console.log(prSavingAccount)
prSavingAccount.eduLoan(20000)
let pvsavAcc=new SavingsAccount("Sravan",1000)
console.log(pvsavAcc)



// complete this js code
// function Person(name, age) {
// 	this.name=name;
// 	this.age=age;
// 	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old`)
	
// }

// function Employee(name, age, jobTitle) {
// 	Person.call(this,name,age);
// 	this.jobTitle=jobTitle;
	
	
	
// }
// Employee.prototype.jobGreet=function() {
// 	console.log(`Hello, my name is ${this.name}, I am ${this.age} years old, and my job title is ${this.jobtitle}.`)

	
// }


// // Do not change code below this line
// window.Person = Person;
// window.Employee = Employee;


// console.log("test")
// const express=require('express')
// const app=express()
// // console.log(app)
// const server=require('http').Server(app)

// app.use(express.static('public'));

// const io=require('socket.io')(server);

// io.on('connection',(socket)=>{
//     console.log("Connection Established",socket.id)
// })


// const PORT=9001;
// server.listen(PORT,()=>{
//     console.log(`Server is running on PORT ${PORT}`);
// })


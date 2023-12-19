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

const pcAccount=new BankAccount("pc",500)
console.log(pcAccount)
pcAccount.deposit(4000)

const PrashanthAccount=new BankAccount("Prashanth",500)
console.log(PrashanthAccount)
PrashanthAccount.deposit(3000)

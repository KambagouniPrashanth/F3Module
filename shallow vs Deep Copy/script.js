// let a={
//     p:100,
// }
// b=a;

// console.log(b.p)
// console.log(a.p)

//in shallow copy if we change in one object that will reflect on other object both object are dependent on each other

/*let a={
    p:100,
}
b=a;
b.p=20;
a.s=30;
b.d=40;

console.log(b)
console.log(a)*/


/*let a={
    p:100,
}
let b={
    ...a,
}

console.log(b)
console.log(a)*/

let a={
    p:100,
}
let b={
    ...a,
}
c=b;
a.p=29
b.p=35
b.q=75;
b.r=79;
c.m=20;
console.log("deep copy")
console.log(a)

console.log(b)

console.log("shallow copy")
console.log(b)
console.log(c)

//in spread operator both object are independent of each other
//if we change in object that will not reflect on the other object


// {p: 29}
// script.js:42 {p: 35}
//both copies applies here

// let a={
//     p:100,
//     g:{
//         f:420,
//         h:20
//     }
// }
// let b={
//     ...a,
// }
// a.p=20

// console.log(a)
// console.log(b)
//{p: 20, g: {…}}g: {f: 420, h: 20}p: 20[[Prototype]]: Object
//script.js:62 {p: 100, g: {…}}

/*let a={
    p:100,
    g:{
        f:420,
        h:20
    }
}
let b={
    ...a,
}
a.p=20
b.g.f=143;

console.log(a)
console.log(b)*/
//g: {f: 143, h: 20}
//g: {f: 143, h: 20}p: 100

/*let a={
    p:100,
    g:{
        p:420,
        r:20
    }
}
let strA=JSON.stringify(a);
console.log(strA)

let batA=JSON.parse(strA)
batA.g.p=500
console.log(batA)
console.log(a)*/
//first it is converted into string created new object using json method 
//batA and a different object if change one object that will not reflect on ther other object



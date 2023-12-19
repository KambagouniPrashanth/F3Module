//sync 
// console.log("one")
// console.log("two")
// console.log("three")


// async 
// console.log("one")
// setTimeout(()=>{
//     console.log("two")

// },1000)
// console.log("three")


/*console.log("one")
function intro(name){
    setTimeout(()=>{
        return `my name is ${name}`
    
    },1000)
}

console.log("three")
let myIntro=intro("pc")
console.log(myIntro)//the function returening undefined bcz we not returning*/





/*function intro(name,callback){
    setTimeout(()=>{
        callback(`my name is ${name}`)
    
    },1000)
}

function workAt(company,callback){
    setTimeout(()=>{
        callback(`working At ${company}`)
    
    },5000)

}
function liveIn(city,callback){
    setTimeout(()=>{
        callback(` liveIn ${city}`)
    
    },2000)

}


intro("pc",function(message){
    console.log(message)

})
workAt("tcs",function(message){
    console.log(message)
})
liveIn("HYD",function(message){
    console.log(message)
})
*/

function intro(name,callback){
    setTimeout(()=>{
        callback(`my name is ${name}`)
    
    },3000)
}

function workAt(company,callback){
    setTimeout(()=>{
        callback(`working At ${company}`)
    
    },2000)

}
function liveIn(city,callback){
    setTimeout(()=>{
        callback(` liveIn ${city}`)
    
    },3000)

}


// intro("pc",function(message){
//     console.log(message)
//     workAt("tcs",function(message){
//         console.log(message)
//         liveIn("HYD",function(message){
//             console.log(message)
//         })
//     })

// })


//above function is callback hell


/*let prom1=new Promise((res,rej)=>{
    setTimeout(()=>{
        let flag=true;
        if(flag) res("Project Completed")
        else
        rej("Project not completed")

    })
})
console.log(prom1)

console.log("end")
prom1.then((res)=>{
    console.log(res)
}).catch((e)=>{
    console.log(e)
})
// console.log(prom1)*/


function intro(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`i am ${name}`)


        },1000)
    })
}
function workAt(company){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`working at${company}`)


        },5000)
    })
}
function liveIn(city){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`live In a${city}`)


        },3000)
    })
}
//promise hell
intro("Prashatnh").then(res=>{
    console.log(res);
    return workAt("accio")
}).then(res=>{
    console.log(res)
    return liveIn("chennai")
}).then(res=>{
    console.log(res)
}).catch((e)=>{
    console.log(e)
})
//promise call back
// let a=intro("Prashanth")
// let b=workAt("Accenture")
// let c=liveIn("chennai")
// let result=Promise.all([a,b,c])
// console.log(result)
// console.log(intro("pc"))

// var a = "accio";
// var b = "job";

// console.log(b.localeCompare(a)); // -1

/*function intro(name,flag){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(flag){
                resolve(`i am ${name}`)

            }
            else
            reject('with no name')



        },1000)
    })
}
function workAt(company,flag){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(flag){
                resolve(`working at${company}`)

            }
            else
            reject('not working')
            


        },5000)
    })
}
function liveIn(city,flag){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(flag){
                resolve(`live In a${city}`)

            }
            else
            reject('no Proper city')


        },3000)
    })
}
*/

//promise all 

/*let result=Promise.all([intro('pc',true),workAt('capgemini',true),liveIn('chennai',true)])
console.log(result)
result.then(res=>{
    console.log(res)
}).catch(e=>{
    console.log(e)
})*/

// console.log(result)
// this one if all the promise is true only return the all 


//promise any
//A||B||C if any of the condition is true it will return that
//

/*let result2=Promise.any([intro('pc',false),workAt('capgemini',true),liveIn('chennai',true)])
console.log(result2)
result2.then(res=>{
    console.log(res)
}).catch(e=>{
    console.log(e)
})*/

//race condition
/*let result3=Promise.race([intro('pc',true),workAt('capgemini',true),liveIn('chennai',true)])
console.log(result3)
result3.then(res=>{
    console.log(res)
}).catch(e=>{
    console.log(e)
})*/

//in race only one result come out all the functions

//another scenario of race condition

/*let result3=Promise.race([intro('pc',false),workAt('capgemini',true),liveIn('chennai',true)])
console.log(result3)
result3.then(res=>{
    console.log(res)
}).catch(e=>{
    console.log(e)
})*/

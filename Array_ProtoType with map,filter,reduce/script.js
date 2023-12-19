/*let nums=[1,2,3,4]
//actually this normally takes 
let multiplywithTwo=nums.map((currentElement,index)=>{
    console.log("currElement",currentElement)
    console.log("index",index)
    return currentElement*2;

})
console.log(nums)
console.log(multiplywithTwo)*/


// currElement 1
// script.js:5 index 0
// script.js:4 currElement 2
// script.js:5 index 1
// script.js:4 currElement 3
// script.js:5 index 2
// script.js:4 currElement 4
// script.js:5 index 3
// script.js:9 (4) [2, 4, 6, 8]

// console.log(Array.prototype)

/*let nums=[1,2,3,4]
//passing this function as argument to function this follow higher order functions
let callbackFN=((currentElement,index)=>{
    console.log("currElement",currentElement)
    console.log("index",index)
    return currentElement*2;

})
let multiplywithTwo=nums.map(callbackFN)
console.log(nums)
console.log(multiplywithTwo)*/


//Array.prototype is comming from JS engine
//Js engine is part of browser



// let nums=[1,2,3,4]
// //passing this function as argument to function this follow higher order functions
// let callbackFN=((currentElement,index)=>{
//     console.log("currElement",currentElement)
//     console.log("index",index)
//     return currentElement*2;

// })

// let multiplywithTwo=nums.map(callbackFN)
// console.log(nums)
// console.log(multiplywithTwo)



// let nums=[1,2,3,4]
// //actually this normally takes 
// Array.prototype.myMap=function(callbackFN){
//     let new_arr=[];
//     for(let i=0;i<this.length;i++){
//         new_arr.push(this[i],i)
//     }
//     return new_arr
// }

// let callbackFN=((currentElement,index)=>{
//     console.log("currElement",currentElement)
//     console.log("index",index)
//     return currentElement*2;

// })

// let multiplywithTwo=nums.myMap(callbackFN)
// console.log(nums)
// console.log(multiplywithTwo)


// let nums=[1,2,3,5]
// let nums1=[4,5,6,7]

// Array.prototype.Prashanth=function(){
//     console.log(this)
//     return "Prashant"
// }
// console.log(nums.Prashanth())
// console.log(nums1.Prashanth())


// let nums=[1,2,3,4]
// //actually this normally takes 
// Array.prototype.myMap=function(callback){
//     let new_arr=[];
//     for(let i=0;i<this.length;i++){
//         let element=callback(this[i],i)
//         new_arr.push(element)
//     }
//     return new_arr
// }
// //here call back is the multiplywithTwo

// // let callbackFN=((currentElement,index)=>{
// //     console.log("currElement",currentElement)
// //     console.log("index",index)
// //     return currentElement*2;

// // })

// let multiplywithTwo=nums.myMap((currentElement,index)=>{
//     // console.log("currElement",currentElement)
//     // console.log("index",index)
//     console.log(currentElement+" index is "+index)
//     return currentElement*5;

// })

// console.log(multiplywithTwo)


/*let nums=[1,2,3,4]
//actually this normally takes current object 
//here we are overriding  function of map with my map
Array.prototype.myMap=function(callback){
    let new_arr=[];
    for(let i=0;i<this.length;i++){
        let element=callback(this[i],i)
        new_arr.push(element)
    }
    return new_arr
}
//here call back is the multiplywithTwo

let callbackFN=((currentElement,index)=>{
    console.log("currElement",currentElement)
    console.log("index",index)
    return currentElement*10;

})

let multiplywithTwo=nums.myMap(callbackFN)//my map functionality written here 

console.log(multiplywithTwo)
let nums2=[3,4,5,6]
console.log(nums2.myMap(callbackFN))*/





// let greaterthanTwo=nums2.filter((currentElement,index)=>{
//     console.log("current Element is",currentElement);
//     console.log("index is ",index);
//     return currentElement%2==0;
// })
// console.log(greaterthanTwo)


// console.log(callbackFN)
/*let arr=[1,2,3,4,5,6]
let nums2=[1,2,3,4,5,6]

let callbackFN=(currentElement,index)=>{
    console.log("current Element is",currentElement);
    console.log("index is ",index);
    return currentElement%2==0;
}

Array.prototype.myFilter=function(callback){//atching myfilter
    let new_arr=[]
    for(let i=0;i<this.length;i++){
        if(callback(this[i]))
        new_arr.push(this[i])

    }
    return new_arr;


}

let evenNumbers=nums2.myFilter(callbackFN)
console.log(evenNumbers)*/
// console.log(arr.myFilter(callbackFN))




// let foodURL='https://github.com/ozlerhakan/mongodb-json-files/blob/master/datasets/restaurant.json'

// // async function fetchDetails(){
// //     let response=await fetch(foodURL);
// //     let result=await response.json();
// //     console.log(result)

// // }
// // fetchDetails()

// fetch(foodURL).then((response)=>response.json).then((data)=>{
//     console.log(data)
// }).catch((error)=>{
//     console.log(error.message)
// })
/*let nums2=[1,2,3,4,5,6]
let intialValue=0;
let sum=nums2.reduce((accumulator,currelemnt,index)=>{
    console.log("accumulator->",accumulator)
    console.log("currelemnt->",currelemnt)
    console.log("index->",index)
    return accumulator+currelemnt;



},intialValue)
console.log(sum)*/


// accumulator-> 0
// script.js:207 currelemnt-> 1
// script.js:208 index-> 0
// script.js:206 accumulator-> 1
// script.js:207 currelemnt-> 2
// script.js:208 index-> 1
// script.js:206 accumulator-> 3
// script.js:207 currelemnt-> 3
// script.js:208 index-> 2
// script.js:206 accumulator-> 6
// script.js:207 currelemnt-> 4
// script.js:208 index-> 3
// script.js:206 accumulator-> 10
// script.js:207 currelemnt-> 5
// script.js:208 index-> 4
// script.js:206 accumulator-> 15
// script.js:207 currelemnt-> 6
// script.js:208 index-> 5
// script.js:214 21


/*let nums2=[1,2,3,4,5,6]

let sum=nums2.reduce((accumulator,currelemnt,index)=>{
    console.log("accumulator->",accumulator)
    console.log("currelemnt->",currelemnt)
    console.log("index->",index)
    return accumulator+currelemnt;



})
console.log(sum)*/


// accumulator-> 1
// script.js:221 currelemnt-> 2
// script.js:222 index-> 1
// script.js:220 accumulator-> 3
// script.js:221 currelemnt-> 3
// script.js:222 index-> 2
// script.js:220 accumulator-> 6
// script.js:221 currelemnt-> 4
// script.js:222 index-> 3
// script.js:220 accumulator-> 10
// script.js:221 currelemnt-> 5
// script.js:222 index-> 4
// script.js:220 accumulator-> 15
// script.js:221 currelemnt-> 6
// script.js:222 index-> 5
// script.js:228 21


/*let nums2=[1,2,3,4,5,6]

let sum=nums2.reduce((accumulator,currelemnt,index)=>{
    console.log("accumulator->",accumulator)
    console.log("currelemnt->",currelemnt)
    console.log("index->",index)
    return accumulator+currelemnt;

},-10)//it will sum 
console.log(sum)*/

//myReduce function
/*let nums2=[1,2,3,4,5,6,[1,2]]
let callbackFN=((accumulator,currelemnt,index)=>{
    // console.log("accumulator->",accumulator)
    // console.log("currelemnt->",currelemnt)
    // console.log("index->",index)
    return accumulator+currelemnt;

})


Array.prototype.myReduce=function(callback,intialValue){
    let accumulator=intialValue;
    for(let i=0;i<this.length;i++){
        if(accumulator===undefined){
            accumulator=this[i];
            // console.log("called")
        }
        else{
            accumulator=callback(accumulator,this[i],i)
        }
        console.log(accumulator)
    }
    return accumulator;

    
}
let sum=nums2.myReduce(callbackFN,0)
console.log(sum)*/


// let sum=nums2.myReduce(callbackFN)
// console.log(sum)


/*let arr=[1,2,3,4,5,6]
let nums2=[1,2,3,4,5,6]

let callbackFN=(currentElement,index)=>{
    console.log("current Element is",currentElement);
    console.log("index is ",index);
    return currentElement%2==0;
}

Array.prototype.myFilter=function(callback){//atching myfilter
    let new_arr=[]
    for(let i=0;i<this.length;i++){
        if(callback(this[i]))
        new_arr.push(this[i])

    }
    return new_arr;


}

let evenNumbers=nums2.myFilter(callbackFN)
console.log(evenNumbers)*/





// accumulator-> 10
// script.js:274 currelemnt-> 1
// script.js:275 index-> 0
// script.js:273 accumulator-> 11
// script.js:274 currelemnt-> 2
// script.js:275 index-> 1
// script.js:273 accumulator-> 13
// script.js:274 currelemnt-> 3
// script.js:275 index-> 2
// script.js:273 accumulator-> 16
// script.js:274 currelemnt-> 4
// script.js:275 index-> 3
// script.js:273 accumulator-> 20
// script.js:274 currelemnt-> 5
// script.js:275 index-> 4
// script.js:273 accumulator-> 25
// script.js:274 currelemnt-> 6
// script.js:275 index-> 5
// script.js:279 31

// let nums=[1,[2,3],4,[5,6,[7,8]],9,[10,11,12]]
// let arr=nums.flat(1)
// console.log(arr)


// let nums=[1,[2,3],4,[5,6,[7,8]],9,[10,11,12]]
// let arr=nums.flat(0)
// console.log(arr)
// 0: 1
// 1: (2) [2, 3]
// 2: 4 
// 3: (3) [5, 6, Array(2)]
// 4: 9
// 5: (3) [10, 11, 12]
// length
// : 
// 6
// [[Prototype]]
// : 
// Array(0)

let nums2=[1,[2,3],4,[5,6,[7,8,[21,22]]],9,[10,11,12]]
let arr=nums2.flat(2)
console.log(arr)






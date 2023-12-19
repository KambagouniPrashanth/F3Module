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



//my filter function
/*let arr=[1,2,3,4,5,6]
let nums2=[1,2,3,4,5,6]

Array.prototype.myFilter=function(callback){//atching myfilter
    let new_arr=[]
    for(let i=0;i<this.length;i++){
        if(callback(this[i]))
        new_arr.push(this[i])

    }
    return new_arr;


}

let callbackFN=(currentElement,index)=>{
    console.log("current Element is",currentElement);
    console.log("index is ",index);
    return currentElement%2==0;
}


let evenNumbers=nums2.myFilter(callbackFN)
console.log(evenNumbers)*/









//reduce function




let nums2=[1,2,3,4,5,6]

Array.prototype.myReduce=function(callback,intialValue){
    let accumulator=intialValue;
    for(let i=0;i<this.length;i++){
        if(accumulator===undefined){
            accumulator=this[i];
             console.log("called")
        }
        else{
            accumulator=callback(accumulator,this[i],i)
        }
        console.log(accumulator)
    }
    return accumulator;

    
}

let callbackFN=((accumulator,currelemnt,index)=>{
    // console.log("accumulator->",accumulator)
    // console.log("currelemnt->",currelemnt)
    // console.log("index->",index)
    return accumulator+currelemnt;

})

let sum=nums2.myReduce(callbackFN)
console.log(sum)
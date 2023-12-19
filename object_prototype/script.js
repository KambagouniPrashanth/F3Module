let arr=[1,2,3]
console.log(`${arr} is chid of Array`)

let obj={
    nam:"pc",
    city:"Delhi",
    getIntro:function(){
        console.log(this.nam+" is from "+this.city)
        return this.nam+" is from "+this.city;

    }

}

let obj2={
    nam:"Prakshit",
    // city:"NDL"
}
obj2.__proto__=obj///inheriting parent class of obj
console.log(obj2.city)
console.log(obj2.getIntro())

// 1,2,3 is chid of Array
// script.js:17 Delhi
// script.js:8 Prakshit is from Delhi
// script.js:18 undefined

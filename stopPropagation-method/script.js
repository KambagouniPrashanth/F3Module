const grandParent=document.getElementById("grandParent");
const parent=document.getElementById("parent")
const child=document.getElementById("child")

/*
grandParent.addEventListener("click",()=>{
    console.log("grandParent div is clicked")
})
parent.addEventListener("click",()=>{
    console.log("Parent div is clicked")
})
child.addEventListener("click",()=>{
    console.log("Child div is clicked")
})*/
//in this case if i click child it display 
// Child div is clicked
// Parent div is clicked
// grandParent div is clicked
//down to up 


/*grandParent.addEventListener("click",()=>{
    console.log("grandParent div is clicked")
},true)
parent.addEventListener("click",()=>{
    console.log("Parent div is clicked")
},true)
child.addEventListener("click",()=>{
    console.log("Child div is clicked")
},true)
//in this case if i click child it display 
// grandParent div is clicked
//  Parent div is clicked
//  Child div is clicked
 //up to down bcz we given true argument in eventlistner*/


 grandParent.addEventListener("click",(event)=>{
    event.stopPropagation();

    console.log("grandParent div is clicked")
},)
parent.addEventListener("click",(event)=>{
    event.stopPropagation();

    console.log("Parent div is clicked")
},)
child.addEventListener("click",(event)=>{
    event.stopPropagation();
    console.log("Child div is clicked")
    

})
//in this case if i click child it display 
//Child div is clicked
// only the specified div is displayed bcz stop Propagation
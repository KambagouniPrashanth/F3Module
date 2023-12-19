let username='';
/*
NOte:
in the  in the form
 every time we click  on submit button so it  referesh the page, so it's the  default behaviour of form
 to prevent this we use event.preventDefault()*/
document.getElementById("submit-btn").addEventListener("click",(event)=>{
    event.preventDefault();
    console.log("text")
     username=document.getElementById("user-name").value;
     username=username.trim()
     //trim method removes white sapce at the begining and the ending

     if(username!=''){
        console.log(username)
        document.querySelector(".chatroom-container").style.display="block";
        document.querySelector(".form-container").style.display="none";
        document.querySelector(".chatting").style.display="flex"

        // document.querySelector(".chatting-sent").style.display="block"
        // document.querySelector(".chatting-recieve").style.display="block"


     }
     
    
})
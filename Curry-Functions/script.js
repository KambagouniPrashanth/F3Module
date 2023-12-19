


function eval(operator){
    return function(a){
        return function(b){
            if(operator==='sum')return a+b;
            else if(operator==='sub')return a-b;
            else if(operator==='mul')return a*b;
            else if(operator==='div')return a/b;


            

        }

    }
}
console.log(eval('sum')(2)(3))
// eval('mul')(3)(4)
// 12
// eval('sub')(3)(4)
// -1
// eval('div')(3)(4)
// 0.75


/*function infiniteCurryFn(a){
    return function(b){
        if(b){
            return function(c){
                if(c){
                    return a+b+c;
                }else{
                    return a+b
                }
            }
           
        }
        else{
            return a;
        }
       
    }

}
console.log(infiniteCurryFn(2)(3)(4))*/
// infiniteCurryFn((2)(3)())

function infiniteCurryFn(a){
    return function(b){
       if(b){
        return infiniteCurryFn(a+b);
       }else{
        return a;
       }
       
    }

}
//2+3=5
//5 is a and 4 is b in this way we call infinite curry function
console.log(infiniteCurryFn(2)(3)(4)())
console.log(infiniteCurryFn(2)(3)(4)(5)(6)(8)())



let a=6;
let b=12;

while(a>1 && b>1){   
    if(a%2==0 || b%2==0){
        a=Math.floor(a/2);
        b=Math.floor(b/2);
        console.log(a,b)
    }
   
    
}
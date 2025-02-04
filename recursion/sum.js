

function sum(n){

    if (n==0){
        return 0
    }
    
    return  Math.pow(n,3) + sum(n-1)
    

}

let a=sum(7)
console.log(a)
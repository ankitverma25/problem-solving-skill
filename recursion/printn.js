let n=6;
let count=0
function println(n){
    if(count==n){
        return
    }
        console.log(count)
        count=count+1
        println(n)
    }


println(n)
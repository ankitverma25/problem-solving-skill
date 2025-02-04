
function hello(n){
    if (n>0){
        console.log('gfg')
        n=n-1;
        hello(n)
    }
    else{
        return
    }

}
hello(5)

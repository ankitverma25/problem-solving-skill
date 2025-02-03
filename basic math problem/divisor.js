let n=4;
let sum=0;

for(let i=1;i<=n;i++){
    for(let j=1;j<=i;j++){
        if(i%j==0){
            sum=sum+j;
        }
        
    }
}
console.log(sum)
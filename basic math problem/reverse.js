const reverse=(x)=>{

    let reverse=0;
    let neg=false;
    if(x<0){
        neg=true;
        x=Math.abs(x)
    }

    while(x>0){
        let digit=x%10;
        reverse=(reverse*10)+digit;
        x=Math.floor(x/10);
    }
    if(neg){
        console.log(reverse*(-1))

    }
    else{console.log(reverse)}

}

reverse(-845)

// /**
//  * @param {number} x
//  * @return {number}
//  */
// var reverse = function(x) {
//     let reverse=0;
//     let neg=false;
//     if(x<0){
//         neg=true;
//         x=Math.abs(x)
//     }

//     while(x>0){
//         let digit=x%10;
//         reverse=(reverse*10)+digit;
//         x=Math.floor(x/10);
//     }
//     if(neg){
//     let negt=reverse*(-1);
//     if(-2147483647<negt){
//         return negt
//     }
//     else{
//         return 0
//     }
//     }
//     else
//     { 
//          if(reverse<2147483647){
//         return reverse

//         }
//        else{
//          return 0
//         }
//         }
// }
    
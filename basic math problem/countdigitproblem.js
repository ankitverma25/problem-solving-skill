// Count Digits
// Difficulty: EasyAccuracy: 30.45%Submissions: 410K+Points: 2
// Given a positive integer n, count the number of digits in n that divide n evenly (i.e., without leaving a remainder). Return the total number of such digits.

// A digit d of n divides n evenly if the remainder when n is divided by d is 0 (n % d == 0).
// Digits of n should be checked individually. If a digit is 0, it should be ignored because division by 0 is undefined.

let number=12;
let store=number;

let numbers = new Set();

while(number>0){
    let digit;
    digit=number%10
    numbers.add(digit)
    number=Math.floor(number/10)
}

let count=0;
numbers.forEach((digit)=>{
    if(store%digit==0){
        
        console.log(`${digit} ${store}`)
        count=count+1;
    }


}
)
console.log(count)

// class Solution {
//     // Function to check whether the number evenly divides n.
//     evenlyDivides(n) {
//         let store=n;
//         let count=0;
//         while(n>0){
//             let digit=n%10;
//             if(store%digit==0){
//                 count++
                
//             }
//             n=Math.floor(n/10);
//         }
        
//         return count
        
        
        
//     }
// }
// let sum = 0;
// function digitNumber(n) {
//     let digits = n.toString().split('').map(Number)
//     let sum = 0;

//     for(let i = 0; i < digits.length; i++) {
//       sum += digits[i];
//     }
    
//     var sumString = sum.toString()
//     if(sumString.length > 1) {
//       var sumDigits = sumString.split('').map(Number)
//       var firstSumDigit = sumDigits.slice(0)
//       var lastSumDigit = sumDigits.slice(-1)
//       return firstSumDigit[0]+ lastSumDigit[0];
//     }
//     else {
//       return sum
//     } 
     
// }

// console.log(digitNumber(2388))

//     console.log(sum)s
//     console.log(String(sum).length)

//     if (String(sum).length > 1) {
//         let sum1 = 0; 
//         for(let i = 0; i < String(sum).length; i++) {
//         console.log(sum[i])
//         sum1 += Number(sum[i])
//       }
//         return sum1;
//      }
//   }
  
// let  isPrime = ((num) => num > 0 && num / 1 === num && num % 2 === 1 && num / num === 1 ? true : false)  
// console.log(isPrime(2))
// console.log(isPrime(0))
// console.log(isPrime(3))
// console.log(isPrime(4))

function isPrime(n) {
  if(n<2) {
    return false
  } else if (n === 2) {
    return true
  } else {
    for(let x = 2; x < n; x++) {
      if(n % x ===0) {
        return false
      }
      return true
    }
  }
}

console.log(isPrime(2))
console.log(isPrime(0))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(75))

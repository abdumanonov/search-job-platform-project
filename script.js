let sum = 0;
function digitNumber(n) {
    let digits = n.toString().split('').map(Number)
    let sum = 0;

    for(let i = 0; i < digits.length; i++) {
      sum += digits[i];
    }
    
    var sumString = sum.toString()
    if(sumString.length > 1) {
      var sumDigits = sumString.split('').map(Number)
      var firstSumDigit = sumDigits.slice(0)
      var lastSumDigit = sumDigits.slice(-1)
      return firstSumDigit[0]+ lastSumDigit[0];
    }
    else {
      return sum
    } 
     
}

console.log(digitNumber(2388))

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
  

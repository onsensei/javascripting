var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var filtered = numbers.filter(function evenNumbers (number) {
    return number % 2 === 0;
  });
console.log(filtered);





// var evenNumbersArray = [];
// for (var i = 0; i < numbers.length; i++)
// {
//   var num = numbers[i];
//   if(num % 2 === 0)
//   {
//     evenNumbersArray.push(num);
//   }
// }
// console.log(evenNumbersArray);





// function isMatchNumber(requiredNumber, anotherNumber)
// {
//   return requiredNumber === anotherNumber;
// }

// var numbers = [1,2,4,5,6,7,8,9,10];

// var targetNumber = 100;
// var filteredNumber = [];
// for (var i = 0; i < numbers.length; i++)
// {
//   var num = numbers[i];
//   if(isMatchNumber(targetNumber, num))
//   {
//     filteredNumber.push(num);
//   }
// }

// console.log(filteredNumber);
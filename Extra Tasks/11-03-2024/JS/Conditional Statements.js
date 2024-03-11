// Conditional Statements in JS

// 8 Questions to practice

// 1. WAJSP to tell the wwather status as per user entered value

// num greater and qual to 30 : - Hot (Summer)
// num between 18 - 29 :- Nuetral
// num less than 18 : Cold

// let a = Number(prompt("Enter the Temperature in your Surrounding : - "));

// if(a<=18)
// {
//     console.log("Your in Cold Temperature");
// }
// else if(a>18 && a<=29)
// {
//     console.log("Your in Nuetral Temperature");
// }
// else
// {
//     console.log("Your in Hot (summer) Temperature");
// }

// 2. WAJSP to check weather the year is leap year or not

// let year = Number(prompt("Enter the year to check Leap Year or not: - "));

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.log(year + " is a leap year.");
// } else {
//     console.log(year + " is not leap year.");
// }

// 3. WAJSP to check weather the alphabet is vowel or not

// let a = prompt("Enter an alphabet");
// if (
//   a == "a" ||
//   a == "e" ||
//   a == "i" ||
//   a == "o" ||
//   a == "u" ||
//   a == "A" ||
//   a == "E" ||
//   a == "I" ||
//   a == "O" ||
//   a == "U"
// ) {
//   console.log("it's a vowel");
// } else if (a >= 0 || a <= 0) {
//   console.log("You entered a number please enter alphabet");
// } else {
//   console.log("It's a consonent");
// }

//4. WAJSP to check weather the triangle is equalateral triangle or Isosceles triangle or scalene triangle
// let s1 = Number(prompt("Enter first s of triangle"));
// let s2 = Number(prompt("Enter second s of triangle"));
// let s3 = Number(prompt("Enter third s of triangle"));
// if(s1==s2 && s2==s3 && s1==s3){
//     console.log("It is Equilateral Triangle");
// }else if(s1==s2 || s2==s3 || s1==s3){
//     console.log("It is Isosceles Triangle");
// }else{
//     console.log("It is Scalene Triangle");
// }

// 5. WAJSP to check weather the given number is odd or even
// let num = Number(prompt("Enter a number"));

// if (num % 2 === 0) {
//   console.log("Even number");
// } else {
//   console.log("odd number");
// }

// 6. WAJSP to access weekdays with number
// let x = Number(prompt("Enter a number between 1 - 7"));
// switch (true) {
//   case x == 1:
//     console.log("Monday");
//     break;
//   case x == 2:
//     console.log("Tuesday");
//     break;
//   case x == 3:
//     console.log("Wednesday");
//     break;
//   case x == 4:
//     console.log("Thursday");
//     break;
//   case x == 5:
//     console.log("Friday");
//     break;
//   case x == 6:
//     console.log("Saturday");
//     break;
//   case x == 7:
//     console.log("Sunday");
//     break;
//   default:
//     console.log("Enter number between 1 - 7");
//     break;
// }

// 6. WAJSP to access months with number
// let month = Number(prompt("Enter number between 1 - 12"));
// month === 1
//   ? console.log("January")
//   : month === 2
//   ? console.log("February")
//   : month === 3
//   ? console.log("March")
//   : month === 4
//   ? console.log("April")
//   : month === 5
//   ? console.log("May")
//   : month === 6
//   ? console.log("June")
//   : month === 7
//   ? console.log("July")
//   : month === 8
//   ? console.log("August")
//   : month === 9
//   ? console.log("September")
//   : month === 10
//   ? console.log("October")
//   : month === 11
//   ? console.log("November")
//   : month === 12
//   ? console.log("December")
//   : console.log("Enter number between 1 - 12");

// // phone number

// var phone = prompt("Please enter your phone number WITH dashes. " + "\n" +
//                     "We will not send you any spam calls.");


// if (phone.charAt(3) == "-" && phone.charAt(7) == "-") {
//     alert("true");
// } else {
//     alert("false");
// }

// // birthday

// var birthDate = prompt("What is your birthday? Use the following format: xx/xx/xx");
// alert(isBirthDate(birthDate)); //declaring 'birthDate' variable(xx/xx/xx). 'alert' calls 'isBirthDate' function
//                               //to check to see if 'birthDate' is valid. 
// if (birthDate.length > 8 || birthDate.length < 8) {
//     return false;
// };

// var isBirthDate = function(birthDate) {
//     for (var i = 0; i <= birthDate.length; i++ ) {  //declaring a function that checks to see
//         if (i === 2 || i === 5) {
//             if (birthDate[i] !=="/") {
//                 alert("you're missing a '/'!");
//                 return false;
//             }  { 
//                 if (!isNaN(parseFloat(birthDate[i])) && isFinite(birthDate[i]))
//                 alert("this is not a number"); 
//                   return false;
//             }  {
//                 return true
//             }
//         } 
    


// // var isBirthday = function(birthDate) { 
// //     return !isNaN(parseFloat(birthDate)) && isFinite(birthDate); };
// (0,1) (3,4) (6,7)
// 06/18/90
var birthDate = prompt("What is your birthday? Use the following format: xx/xx/xx");
// 
if (alert(birthDate.length == 8 && birthDate.charAt(2) == "/" && birthDate.charAt(5) && typeof birthDate == isNaN) {
    return true;
} else { 
    return false;
}


// //postal code

// // state abbreviation 

// //married
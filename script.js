// Console = "Akbar ali"
// console.log(Console)

// var name = "Akbar"
// var lastname = "Ali"
// var age = 17;
// var Gender = "Male";
// var Active = true;
// var Class = 12;
// var country = "Pakistan";
// var subject = "English";

// console.log(age, name, lastname, Gender, Active, Class, country, subject)



// const jd = 94.44
// console.log(jd)

// var firstName ="Akbarali";
//  document.write(firstName);

// var first , second ,three ;
// first ="22"
// document.write(first)

// let name ="akbar"
//  name ="akbar  h"
//  document.write(name)


// var i = "AkbarLi"
// i= -34.44
// i = true
// i =

// document.write(i)
// document.write("<br>")
// document.write(typeof i)


//arithmetic operators //
// var a = 2;
// var b = 2 ;
// document.write( (a + b ) * (5) - 10 + (5))

// var a = 10;
// var b = 20;
// a **= b ;

// var a = 20;
// var b = 20;
// console.log( a===b );


// var a = 10;
//    var b = 100 ;

//   if( a = b ){
//     document.write("akbar");

//   }


// var a = 30;
// var b = 15;

// console.log(! a >= 222);



// if else//
// var name ="Akbar";
// var gender = "male";

// if(gender == "male"){
//   document.write("sahi ha" + name);

// }else{
//     document.write("no galat ha" + name);
// }


// var per = 70;
//     if (per >= 80 && per <= 100) {
//         document.write("1st")
//     }else if (per >= 80 && per <= 100) {
//         document.write("2st")
//     }else if (per >= 60 && per <= 80) {
//         document.write("3st")
//     }else if (per >= 40 && per <= 60) {
//         document.write("4st")
//     }else if (per >= 20 && per <= 40) {
//         document.write("Fail")
//     }else if (per >= 10 && per <= 20) {
//         document.write("Please enter your persentage")
//         document.write("last nmber 100")
//     }


// var per = prompt("Enter you Parsentage ")
// if (per >= 80 && per <= 100) {
//     document.write(" you are 1st position")
// } else if (per >= 60 && per <= 80) {
//     document.write(" you are 2st position")
// } else if (per >= 40 && per <= 60) {
//     document.write(" you are 3st position")
// } else if (per >= 20 && per <= 40) {
//     document.write(" you are 4st position")
// } else if (per >= 10 && per <= 20) {
//     document.write("you are Fail")
// } else {
//     document.write("Enter yoyur Persantage")
// }


// var a = 100;
//         var  b;
//         b = "Value is " + (a < 100? "true" : "false");
//         document.write(b)



// var age = 34;
// switch (true) {
//     case ( age >= 10 && age <= 20):
//     document.write("You are Eligable Come here")
//     break;
//     case ( age >= 21 && age <= 30):
//     document.write("You are Eligable but ritire a 2 years ok")
//     break;
//     case ( age >= 31 && age <= 40):
//     document.write("you are not Eligable")
//     break;
//     default:
//     document.write("Enter a valid age")
// }


// var day = prompt ();
//         switch (day) {
//             case 0:
//                 document.write("Today is monday")
//             break;
//             case 1:
//                 document.write("Today is tus")
//             break;
//             case 2:
//                 document.write("Today is wed")
//             break;
//             case 3:
//                 document.write("Today is thus")
//             break;
//             case 4:
//                 document.write("Today is fri")
//             break;
//             case 5:
//                 document.write("Today is sad")
//             break;
//             case 6:
//                 document.write("Today is san")
//             break;

//             default:
//             break;
//         }


var day = parseInt(prompt("Enter a number (0-6):")); // User se input lein aur number mein convert karein

// Days array banate hain
var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// Check karte hain ke input valid hai
if (day >= 0 && day <= 6) {
    document.write("Today is " + days[day]); // Days array se corresponding day print karein
} else {
    document.write("Invalid input! Please enter a number between 0 and 6."); // Invalid input ka message
}




// var age = 90;
// switch (true) {
//     case ( age >= 10 && age <= 20):
//         document.write("you are Eligable")
//     break;
//     case ( age >= 21 && age <= 30):
//         document.write("you are not Eligable")
//     break;

//     default:
//     document.write("Enter a valid age")
//     break;
// }


// var a = 145660;
// var b = 20334;
// if( a < b ){
//   alert( a + b)
// }else{
//     alert("Hello world : " + b)
// }


// var a = confirm("Do you like our website")

// if (a) {
//     alert("Thanks you ")
// } else {
//     alert("No Thanks you ")
// }


//function//

// function Hello(){
//     document.write("Hello everybady the world");
//    }
//    Hello();
//    document.write("<br>")
//    document.write("<br>")
//    Hello();
//    document.write("<br>")
//    document.write("<br>")

//    Hello();
//    document.write("<br>")
//    document.write("<br>")

//    Hello();
//    document.write("<br>")
//    document.write("<br>")

//    Hello();
//    document.write("<br>")



//paramiter//

// function hello(fname = "akbar", iname = "ali"){
//     document.write("hello" + fname + "  "+ iname);
// }

// function sum(a,b){
//       document.write(a+b);
// }


// hello("djdj" , "ccc")
// hello("ss" , "cddcc")
// sum(23 , 55 , 5);


// Functions with Return Value //

// function sum (Math,sci,eng){
//     var s= Math + sci + eng;

//     return s;
// }

// var totel = sum (22,33,45);
// document.write(totel);


//Global & Local Variable//

// var a = "Akbar Ali";
// function hello(){
//    document.write( a + " <br>")
// }

// hello();
// document.write( a )

//for Loop//

// for (a = 1; a <= 100; a++) {
//     document.write(a + "Akbar Ali <br><br>")
// }

//while loop//

// var a = 1
// while (a <= 10) {
//     document.write(a + "Akbar Ali<br>")
//     a = a + 1;
// }

//Do While Loop //

// var a = 1;
// do {
//     document.write(a + "Akbar ali <br><br>");
//     a = a + 1;
// }
// while (a <= 100);

//Switch Case//

// var day = 5;
// switch (day) {
//     case 1:
//         document.write("Monday")
//         break;
//     case 2:
//         document.write("tusday")
//         break;
//     case 3:
//         document.write("wednesday")
//         break;
//     case 4:
//         document.write("thursday")
//         break;
//     case 5:
//         document.write("friday")
//         break;
//     case 6:
//         document.write("saturday")
//         break;
//     case 7:
//         document.write("sunday")
//         break;

//     default:
//         document.write("Enter a week number")
// }

//pop and push and Shift & Unshift//

// var a = ["Akbar", "Ali", "Hussain", "Awn"]
// document.write(a + "<br><br>")
// a.pop()
// document.write(a + "<br><br>")
// a.push("Awn")
// document.write(a + "<br><br>")
// a.shift()
// document.write(a + "<br><br>")
// a.unshift("Akbar")
// document.write(a + "<br><br>")

//Object//

// var student = {
//     name: "Akbar",
//     lastname: "Ali",
//     class: 12,
//     Active: true,
//     Movies: ["Raksha Bandhan", "PK", "Pushpa", "ARY"],
//     salery: function () {
//         return 25000;
//     },
//     fullname: function () {
//         return this.name + " " + this.lastname;
//     },
//     living: {
//         city: "Pakistan",
//         country: "Iran"
//     }


// }
// console.log(student);
// document.write(student.living.country)

// const students = [
//     {
//         name:"Akbar Ali",
//         class: 12,
//         Active: true,

//     },
//     {
//         name:" Ali",
//         class: 12,
//         Active: true,
        
//     },
//     {
//         name:"Awn",
//         class: 12,
//         Active: true,            
//     },
//     {
//         name:"Hussain",
//         class: 12,
//         Active: true,                
//     }
// ]

// console.log(students);

// Template Literals
// let ali = "Akbar";
// console.log(`Hello, ${ali}!`);



// Arrow Functions
// const add = (a, b) => a + b;
// console.log(add(5, 3));




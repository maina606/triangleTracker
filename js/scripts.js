/*User Logic - user interaction with the Front-end/





/*Business Logic - Functionality

var eq = function(a, b, c){
  return eq
}

if (a === b && a === c && b === c){
    prompt("This is an equilateral triangle, since all the sides are equal.");
} else if (a === b || b===c ||a === c) {
    prompt("This is an isosceles triangle, since two of the sides are equal.");
} else if (a != b && b != c && a != c) {
    prompt("This must be a scalene triangle, since none of the sides are equal.");
} else {
     prompt("Not a triangle!");
}

alert(eq);

*/

/*
function myFunction() {document.getElementById("frm1").submit();}

*/

/*function myFunction() {
  var x = document.getElementById("frm1");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  document.getElementById("demo").innerHTML = text;
}

/*
var triangles = function(a, b, c){

    if (a === b && a === c && b === c){
        prompt("This is an equilateral triangle, since all the sides are equal.");
    } else if (a === b || b===c ||a === c) {
        prompt("This is an isosceles triangle, since two of the sides are equal.");
    } else if (a != b && b != c && a != c) {
        prompt("This must be a scalene triangle, since none of the sides are equal.");
    } else {
         prompt("Not a triangle!");
    }
  return (triangles);
}
*/


/* */

var triangles = function (a, b, c){

  if (a === b && a === c && b === c){
      "This is an equilateral triangle, since all the sides are equal.";
  } else if (a === b || b===c ||a === c) {
      "This is an isosceles triangle, since two of the sides are equal.";
  } else if (a != b && b != c && a != c) {
      "This must be a scalene triangle, since none of the sides are equal.";
  } else {
       prompt("Not a triangle!");
  }

  return ;
}

var sides = parseInt("Enter 3 numbers: " + a, b, c);

var a = parseInt(prompt("Enter a number:"));
var b = parseInt(prompt("Enter another number:"));
var c = parseInt(prompt("Enter yet another number:"));
var result = triangles(a, b, c);



alert(result);




/*
var numEven = function (num1, num2){
	return num1 / num2;
};
var num1 = parseInt(prompt("Enter a number:"));
var num2 = parseInt(prompt("Enter another number:"));
var result = numEven(num1, num2);
alert(result);

if(result % 2 === 0){ //if the reminder is 0 after dividing 2 numbers, then even
	alert("This is an even number");
} else {
	alert("This is an odd number!");
}
*/

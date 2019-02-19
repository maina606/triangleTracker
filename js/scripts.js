/*User Logic - user interaction with the Front-end part/




/* ----------------------Business Logic - Functionality------------------------------*/


/* ---------------------- Form------------------------------*/
/*
function myFunction() {
  var side1 = one;// get input from first input box
  var side2 = two;// get input from first input box
  var side3 = three;// get input from first input box
alert(triangles(side1, side2, side3));
}

function myFunction(form) {
document.getElementById("frm1").submit();}
*/

/*
function myFunction(form) {
  var x = document.getElementById("frm1");
  var digits = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    digits += x.elements[i].value + "<br>";
  }
*/


/*
var triangles = function (a, b, c){
  if (a + b > c || b + c > a || a + c > b){
    if (a === b && a === c && b === c){
      if (a === b || b===c ||a === c) {
        if (a != b && b != c && a != c) {
          return "This must be a scalene triangle, since none of the sides are equal.";
        } else {
            return "This is an isosceles triangle, since two of the sides are equal.";
        } else {
            return "This is an equilateral triangle, since all the sides are equal.";
        } else {
          return "Triangle CANNOT be formed using these values!";
        }
  }
}

var sides = parseInt("Enter 3 numbers: " + a, b, c);

var a = parseInt(prompt("Enter a number:"));
var b = parseInt(prompt("Enter another number:"));
var c = parseInt(prompt("Enter yet another number:"));
var result = triangles(a, b, c);

alert(result);

*/


/* ---------------------------------------------------- */


var triangles = function (a, b, c){
  if (a === b && a === c && b === c){
    return "This is an equilateral triangle, since all the sides are equal.";
  }
  if (a === b || b===c ||a === c) {
    return "This is an isosceles triangle, since two of the sides are equal.";
  }
  if (a != b && b != c && a != c) {
    return "This must be a scalene triangle, since none of the sides are equal.";
  }
  if (a + b > c || b + c > a || a + c > b){
      return "Triangle CANNOT be formed using these values!";
  }
    else {
      return "Not a triangle";
    }
}

var sides = parseInt("Enter 3 numbers: " + a, b, c);

var a = parseInt(prompt("Enter a number:"));
var b = parseInt(prompt("Enter another number:"));
var c = parseInt(prompt("Enter yet another number:"));
var result = triangles(a, b, c);

alert(result);

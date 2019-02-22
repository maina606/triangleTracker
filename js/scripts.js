
/* ----------------------Business Logic - Functionality------------------------------*/




var triangles = function (a, b, c){
  //debugger
  if (a + b > c && b + c > a && a + c > b){ // if the 3 sides make a triangle
    if (a === b && a === c && b === c){ // if all the sides are equal
      return "This is an equilateral triangle, since all the sides are equal.";
    }
    else if (a === b || b===c ||a === c) { // if two sides are equal
      return "This is an isosceles triangle, since two of the sides are equal.";
    }
    else if (a != b && b != c && a != c) { // if none of the sides are equal
      return "This must be a scalene triangle, since none of the sides are equal.";
    }
  } else {// if the 3 sides dont make a triangle
    return "Not a triangle";
  }
}

/* ---------------User Logic - user interaction with the Front-end part ----------------*/
/* ---------------------- Form------------------------------*/
function myFunction() {

  var a = parseInt(document.getElementById("one").value);
  var b = parseInt(document.getElementById("two").value);
  var c = parseInt(document.getElementById("three").value);
  // console.log(a);
  // console.log(b);
  // console.log(c);
  var result = triangles(a, b, c);

  alert(result)
}







/* ---------------------------------------------------- */
/*

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

*/

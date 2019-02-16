/*User Logic - user interaction with the Front-end/





/*Business Logic - Functionality */


/*
function myFunction() {document.getElementById("frm1").submit();}  */



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

/*
function myFunction() {
  var side1 = one;// get input from first input box
  var side2 = two;// get input from first input box
  var side3 = three;// get input from first input box
alert(triangles(side1, side2, side3));
}






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

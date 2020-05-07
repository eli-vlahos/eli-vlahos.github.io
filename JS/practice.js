//must start with letters, underscore (_) or $ sign
//undefined is null and null is actually an object
//they are different in type but same in value
//typeof is a function that will return the primitive or complex data type
//functions can be used as variables, that is they can be added subtracted ect.abstract

//objects are the equivalent of classes
//to access different property values, do objectName.propertyName or objectName["propertyName"]
/*
onchange	An HTML element has been changed
onclick	The user clicks an HTML element
onmouseover	The user moves the mouse over an HTML element
onmouseout	The user moves the mouse away from an HTML element
onkeydown	The user pushes a keyboard key
onload	The browser has finished loading the page
*/
//Lots of different functions for finding text inside strings, converting between different data types
//arrays can be used in javascript
//can have holes in an array
//difference between arrays and objects in numerical vs. named indexes
//if you use typeof, will return object not array
//if you want to combine an array, can use join() or toString(), only difference is join you can specify a seperating parameter

//array.foreach() will do an operation on each array element
//array.map() will create a new array with the specified operation performed
//array.filter() creates a new array without elements that fail a boolean test
// for date must enter more than one parameter, 
//Date is essentially a function that converts a string into a date
//math.function() will do several different math functions
//This is a ternary function: var voteable = (age < 18) ? "Too young":"Old enough";

//javascript hoists initializations, that is it doesn't matter where you declare the variable, it will automatically float to the top

//strict mode is a more seriousversion of javascript that is more efficient and prevents you from doing certain things


/*class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return "I have a " + this.carname;
  }
}

Can have a function under the title static
*/

/*for inheritance:
class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

get and set functions are used to retrieve the value of private variables in a private class
*/
// ==ClosureCompiler==
// @compilation_level SIMPLE_OPTIMIZATIONS
// @output_file_name default.js
// ==/ClosureCompiler==

var Vechicle = function(year) {
 //this.Name = Name;
 this.year = year;
 //this.model = model;
}

Vechicle.prototype.old= function(yr) {
 var old = yr- this.year;
    return old;
}

var Car = function(Name, year, model,com) {
  this.Name = Name;
  this.year = year;
  this.model = model;
  this.com = com;

}

Car.prototype = Object.create(Vechicle.prototype);
Car.prototype.constructor = Car;
Car.prototype.engine = function() {
 var r = "V8 Hemi";
    return r;
}



/*var amm = new Car('dodge', 2009, 'charger', 'GM');
console.log(amm.Name);
console.log(amm.year);
console.log(amm.model);
console.log(amm.com);
console.log(amm.old(2018));
console.log(amm.engine());*/


///////////////////////////////////////
var passanger = function(driver, Name, yr, model, com) {
  this.driver = driver;
  this.ccar = new Car(Name,yr,model,com);

}

//passanger.prototype = Object.create(Car.prototype);
//passanger.prototype.constructor = passanger;
passanger.prototype.currDriver = function() {

  console.log("Current driver of "+this.ccar.Name + "is " + this.driver);
}

passanger.prototype.eng = function() {
  var i = this.ccar.engine();
  var j = this.ccar.old(2015);
  console.log(i);
  console.log(j);
}

var n = new passanger('Bibek', 'Honda', 2013, 'accord', 'japanese' );
n.currDriver();
n.eng();
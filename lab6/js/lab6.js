/**
 * Author:    Zeyu Zhang, Jacob Hanshaw
 * Created:   01.31.2021
 * Lincense: Public
 **/

var myTransport = ["Ford", "Sketeboard", "Bike", "Prius"]
var myMainRide = {Make : "Ford",
  Model : "Mustang GT",
  Color : "Black",
  Year : 2006
}
//output
document.writeln("Getting around: " + myTransport + "<br>");
document.writeln("My Main Ride: <pre>",
  JSON.stringify(myMainRide, null, '\t'), "</pre>");

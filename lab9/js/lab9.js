/**
 * Author:    Zeyu Zhang, Jaedon Lee
 * Created:   02.07.2021
 * Lincense: Public
 **/
var outputEl = document.getElementById("output");
var nodenew1El = document.createTextNode("random ");
var nodenew2El = document.createTextNode("text ");
var bonusEL = document.createTextNode(" bonus")

document.getElementById("output").appendChild(nodenew1El);
document.getElementById("output").appendChild(nodenew2El);
document.getElementById("output").prepend(bonusEL)

//bonus2
var node=document.getElementById("output").lastChild.cloneNode(true);
document.getElementById("output").appendChild(node);
//bonus3

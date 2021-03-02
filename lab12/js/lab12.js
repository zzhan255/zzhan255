/**
 * Author:    Zeyu Zhang
 * Created:   02.22.2021
 * Lincense: Public
 **/
var name = "Zeyu Zhang"

function sortingHat(name){
  var nameLength = name.length;
  var mod = nameLength % 4;
  if (mod === 1) {
      return "Gryffindor";
    } else if (mod === 2) {
      return "Ravenclaw";
    } else if (mod === 3) {
      return "Hufflepuff";
    } else {
      return "Slytherin";
    }
};

// Create an event listener attached to #button

$('#button').click(function(){
// that gets the value of #input and assigns it to a variable name
var name = $('#input').val();
// runs sortingHat(name) and stores the result in a variable house
var house = sortingHat(name);
// appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
$('#output').append("<h1>");
$('#output h1').text("The Sorting Hat has sorted you into: " + house)
});
}

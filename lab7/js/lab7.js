/**
 * Author:    Zeyu Zhang, Jacob Hanshaw
 * Created:   02.03.2021
 * Lincense: Public
 **/
function sortName(nameChoice) {
  alert(nameChoice);
  var nameArray + nameChoice.split('');
  console.log("nameArray =", nameArray);
  var sortNameArray = nameArray.sort();
  console.log("sortNameArray =", sortNameArray);
  var sortedName = sortNameArray.join('');
  console.log("sortedName =", sortedName);
  return sortedName;
}

var nameChoice = window.prompt("please enter your name:");
console.log("Name Choice=",nameChoice);

document.writeln("Here is your new name：", </br>，
    sortName(nameChoice), "</br>");

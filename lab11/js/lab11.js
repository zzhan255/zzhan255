/**
 * Author:    Zeyu Zhang, Jaedon Lee
 * Created:   02.07.2021
 * Lincense: Public
 **/
var challengesEl = $('#challenges');
var problemsEl = $('#problems');
var resultsEl = $('#results');
var myButton = "<button>Click Me</button>";

challengesEl.append(myButton);
problemsEl.append(myButton);
resultsEl.append(myButton);

$(document).ready(function() {
  $(":button").click(function() {
    $("#content").toggleClass("special");
  });
});

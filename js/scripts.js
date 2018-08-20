$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var activity = $("input#activity").val();
    var description = $("textarea#description").val();

    var newToDo = new ToDo (activity, description);

    $("ol").append("<li class='chore'><div class='list-activity'>" + newToDo.activity + "</div><div class='hidden'></div></li>");


    $(".chore").click(function() {
      $(this).children(".hidden").text(newToDo.description);
      $(".hidden").toggle();
    });

    $("input#activity").val("");
    $("textarea#description").val("");

  });
});

function ToDo (activity, description) {
  this.activity = activity;
  this.description = description;
}

// ToDo.prototype.summarize = function() {
//   return this.description;
// }

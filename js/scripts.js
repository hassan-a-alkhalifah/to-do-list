$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var activity = $("input#activity").val();
    var description = $("textarea#description").val();

    var newToDo = new ToDo (activity, description);

    $("ol").append("<li><span class='chore'>" + newToDo.activity + "</span></li><div class='hidden'></div>");

    $(".chore").click(function() {
      $(".hidden").text(newToDo.summarize());
      $(".hidden").fadeToggle();
    });

    $("input#activity").val("");
    $("textarea#description").val("");

  });
});

function ToDo (activity, description) {
  this.activity = activity;
  this.description = description;
}

ToDo.prototype.summarize = function() {
  return this.description;
}

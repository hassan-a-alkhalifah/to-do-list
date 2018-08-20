// Da Biz
function ToDo (activity, description) {
  this.activity = activity;
  this.description = description;
}

// Log
$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var activity = $("input#activity").val();
    var description = $("textarea#description").val();

    var newToDo = new ToDo (activity, description);

    // $("ol").append("<li><span class='chore'>"+ newToDo.activity +"</span></li>");
    //
    // $("input#activity").val("");
    // $("textarea#description").val("");
    //
    // $(".chore").click(function() {
    //   console.log($(newToDo));
    //   $(".hidden").show();
    //   $(".hidden p").text(newToDo.description);
    // });

    $(".activity-list").append("<div class='chore'>"+ newToDo.activity+ "<div class='hidden'>"+newToDo.description+"</div></div>");

    $("input#activity").val("");
    $("textarea#description").val("");

    $(".chore").last().click(function() {
      $(this).children().toggle();
      // console.log($(newToDo));
      // $(".hidden").toggle();
      // $(".hidden p").text(newToDo.description);
    });
  });
});

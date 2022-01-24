$(document).ready(function () {
    window.setInterval(function () {
      $("#currentDay").text(moment().format("MMMM DD, YYYY, h:mm:ss a"));
    }, 1000);
    // save current state ... button
    $(".saveBtn").on("click", function () {
      console.log(this);
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      localStorage.setItem(time, text);
    });
    // grab from local storage
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
  
    function timeSchedule() {
      var currentTime = moment().hours();
      $(".time-block").each(function () {
        var timeSlot = parseInt($(this).attr("id"));
        console.log(timeSlot, currentTime);
        console.log(currentTime);
        if (timeSlot < currentTime) {
          $(this).addClass("past");
          $(this).removeClass("future");
          $(this).removeClass("present");
        } else if (timeSlot === currentTime) {
          $(this).removeClass("past");
          $(this).addClass("present");
          $(this).removeClass("future");
        } else {
          $(this).removeClass("present");
          $(this).removeClass("past");
          $(this).addClass("future");
        }
      });
    }
  
    timeSchedule();
  });
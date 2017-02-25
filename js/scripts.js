$(document).ready(function() {
  $("form#vacation-quiz").submit(function(event) {
    event.preventDefault();

    $("#vacation-quiz").slideUp();
    $("#prompt").slideUp();
    $("#restartQuiz").delay(2000).slideDown();
    $("#vacation1").hide();
    $("#vacation2").hide();
    $("#vacation3").hide();

    var question1score = parseInt($("input:radio[name=question1]:checked").val());
    var question2score = parseInt($("input:radio[name=question2]:checked").val());
    var question3score = parseInt($("input:radio[name=question3]:checked").val());
    var question4score = parseInt($("input:radio[name=question4]:checked").val());
    var question5score = parseInt($("input:radio[name=question5]:checked").val());

    var totalScore = question1score + question2score + question3score + question4score + question5score;

    if (totalScore <= 7) {
      $("#vacation1").delay(2000).slideDown();
    } else if (totalScore <= 13) {
      $("#vacation2").delay(2000).slideDown();
    } else {
      $("#vacation3").delay(2000).slideDown();
    }

  });

  $("form#restartQuiz").submit(function(event) {
    event.preventDefault();

    location.reload();
  });

});

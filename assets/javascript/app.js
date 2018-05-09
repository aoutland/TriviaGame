var panel = $("#quiz");

// Questions 
var questions = [{
  question: "How many people can play Tic-Tac-Toe?",
  answers: ["20 people", "2 people", "3 people", "1 person"],
  correctAnswer: "2 people"
}, {
  question: "The game known in America as tic-tac-toe is more commonly known in Britain as?",
  answers: ["Snakes and Ladders", "Ohs and Exes", "Naughts and Crosses", "The Crossing Game"],
  correctAnswer: "Naughts and Crosses"
}, {
  question: "Tic Tac brand breath mints are available in which of the following fruity flavors?",
  answers: ["Cherry", "Grape", "Orange", "Melon"],
  correctAnswer: "Orange"
}, {
  question: "At which of the following events would you be most likely to see a tic tac man?",
  answers: ["Horse Race", "Flea Market", "Dog Show", "Soccer Match"],
  correctAnswer: "Horse Race"
}, {
  question: "How do you win a game of Tic-Tac-Toe, by connecting ____ in a row?",
  answers: ["Four", "Seven", "Two", "Three"],
  correctAnswer: "Three"
}];

var timer;
var game = {
  correct: 0,
  incorrect: 0,
  counter: 60,

  countdown: function() {
     game.counter--;
    $("#counter-number").html(game.counter);
    if (game.counter === 0) {
      alert("You ran out of time!");
      game.done();
    }
  },

  start: function() {
    timer = setInterval(game.countdown, 1000);
    $("#sub-container").prepend("<h2>Time Remaining: <span id='counter-number'>60</span> Seconds</h2>");
    $("#start").remove();
    for (var i = 0; i < questions.length; i++) {
      panel.append("<h2>" + questions[i].question + "</h2>");
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append("<input type='radio' name='question-" + i +
        "' value='" + questions[i].answers[j] + "''>" + questions[i].answers[j]);
      }
    }
    // this adds "done" button after all of the questions and answers have been appended to page
    panel.append("<button id='done'>Done</button>");
  },

  done: function() {
   $.each($("input[name='question-0']:checked"), function() {
      // if the value of "this" which equals the value of the input equals correctAnswer
      if ($(this).val() === questions[0].correctAnswer) {
        // "correct" is variable within "game" object, to get to the "correct" variable must call "game" first then "correct" --> game.correct
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-1']:checked"), function() {
      if ($(this).val() === questions[1].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() === questions[2].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() === questions[3].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() === questions[4].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() === questions[5].correctAnswer) {
        game.correct++;
      }
      else {
        game.incorrect++;
      }
    });

    this.result();
  },

  result: function() {
   
    clearInterval(timer);
    
    $("#sub-container h2").remove();
    
    panel.html("<h2>How did you do?</h2>");
    
    panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
    panel.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
    panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  }
};

// CLICK EVENTS "event listers" that will run function when "start" and "done" elements are clicked

$(document).on("click", "#start", function() {
  game.start();
});


$(document).on("click", "#done", function() {
  game.done();
});
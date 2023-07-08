//if we click on the start/reset
var playing = false;
var score;
var action;
var timeremaining;
var correctAnswer;
document.getElementById("startreset").onclick = function() {
    //if we are playing
    if (playing == true) {
        location.reload();

    } else {
        playing = true;
        //if we are not playing
        //set score to 0
        score = 0;
        document.getElementById("scorevalue").innerHTML = score;
        // document.getElementById("timeremaining").style.display = "block";
        show("timeremaining");
        timeremaining = 60;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        hide("gameOver");
        //change button to reset
        document.getElementById("startreset").innerHTML = "Reset Game";
        //start countdown
        startCoutdown();
        //generate a new Q&A
        generateQA();

    }
}

//clicking button

for (i = 1; i < 5; i++) {
    document.getElementById("box" + i).onclick = function() {

        //check if we are playing
        if (playing == true) {
            //yes
            if (this.innerHTML == correctAnswer) { //correct answer
                //increase score by 1
                score++;
                document.getElementById("scorevalue").innerHTML = score;
                //hide wrong box and show correct
                // hide("wrong");
                show("correct");
                setTimeout(function() { hide("correct") }, 1000);
                //Generate new ques
                generateQA();
            } else {
                // wrong answer
                // hide("correct");
                show("wrong");
                setTimeout(function() { hide("wrong") }, 1000);
            }
        }
    }



}








function startCoutdown() {
    action = setInterval(function() {
        timeremaining -= 1;
        document.getElementById("timeremainingvalue").innerHTML = timeremaining;
        if (timeremaining == 0) {
            stopCountdown();
            // document.getElementById("gameOver").style.display = "block";
            show("gameOver");
            document.getElementById("gameOver").innerHTML = "<p>Game Over!</p><p>Your Score is " + score + " .</p>";
            // document.getElementById("timeremaining").style.display = "none";
            hide("timeremaining");
            hide("correct");
            hide("wrong");
            playing = false;
            document.getElementById("startreset").innerHTML = "Start Game";

        }
    }, 1000);
}

function stopCountdown() {
    clearInterval(action);
}

function hide(Id) {
    document.getElementById(Id).style.display = "none";
}

function show(Id) {
    document.getElementById(Id).style.display = "block";
}

function generateQA() {

    var x = 1 + Math.round(10 * Math.random());
    var y = 1 + Math.round(10 * Math.random());
    correctAnswer = x * y;
    document.getElementById("question").innerHTML = x + "X" + y;
    var correctPosition = 1 + Math.round(3 * Math.random());
    document.getElementById("box" + correctPosition).innerHTML = correctAnswer;
    innerHTML = correctAnswer;
    var answers = [correctAnswer];
    for (i = 1; i < 5; i++) {
        if (i != correctPosition) {
            var wrongAnswer;
            do {
                wrongAnswer = (1 + Math.round(10 * Math.random())) * (1 + Math.round(10 * Math.random()));

            }
            while (answers.indexOf(wrongAnswer) > -1);




            document.getElementById("box" + i).innerHTML = wrongAnswer;
            answers.push(wrongAnswer);
        }
    }
}
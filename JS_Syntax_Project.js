//2 arrays of triangle jokes (questions and answers)
const triangleJokeQuestions = ["What kind kind of triangle is a tortilla chip?", "What does a triangle call a circle?", "Why did the square fall in love with the triangle?", "What newspaper does a triangle read?"];
const triangleJokeAnswers = ["An i-salsa-les triangle", "Pointless", "Because she had acute angle.", "...the *hypotenews*"];

//2 arrays of square jokes (questions and answers)
const squareJokeQuestions = ["What is it called when a square is treated respectfully?", "Why do restaurants put a pizza in square boxes?", "What did the professor say when his student asked if pyramids were essentially squares?", "Why didn't King Arthur use the square table?"];
const squareJokeAnswers = ["Equal rights.", "Because they don't cut corners.", "Yes, but only up to a point.", "Because that table wasn’t a-round."];

////2 arrays of circle jokes (questions and answers)
const circleJokeQuestions = ["Why are circles round?", "Why is it called the circle of life?", "Why isn't Earth a perfect circle?", "Why are farmers so good at drawing circles?"];
const circleJokeAnswers = ["They're to cool to be square.", "Because it has no point.", "You try keeping your figure after 4.543 billion years.", "Because the are Protractors"];

/* This variable will represent the user input. In the case of an actual site created 
with HTML/CSS, the user input would probably be a button to generate through the jokes 
and the jokes would then be displayed on the screen.
User will enter a shape here.*/
const shapeInput = "circle";

//function to cycle through jokes at random depending on user choice
function jokeOutput() {
    let input = shapeInput.toLowerCase();
    //console.log(input);
    if (input === "square") {
        jokeRandomizer(squareJokeQuestions, squareJokeAnswers);
    } else if (input === "circle") {
        jokeRandomizer(circleJokeQuestions, circleJokeAnswers);
    } else {
        jokeRandomizer(triangleJokeQuestions, triangleJokeAnswers);
    }
}

//function to cycle through arrays
function jokeRandomizer(quesArr, ansArr) {
    let num = Math.floor(Math.random() * 4);
    for (let i = 0; i < quesArr.length; i++) {
        if (num === i) {
            console.log(quesArr[i]);
            console.log(ansArr[i]);
        }
    }
}

//if the user says square, cycle through square jokes and answers, repeat for the rest

console.log("Choose to hear a joke either about a square, circle, or triangle.");
console.log("You chose to read a joke about a " + shapeInput + ".")
jokeOutput();
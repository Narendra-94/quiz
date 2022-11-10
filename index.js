const readlineSync = require('readline-sync');

var username = readlineSync.question("What's your name ?\n");
var score = 0;

console.log("Welcome " + username + " to test if you are an Anime fan 😁!\n")


function play(que, ans) {

  var userAnswer = readlineSync.question(que)

  if (userAnswer == ans) {
    console.log("you are right")
    score++;
    console.log("Your current score is " + score + "\n")
  }
  else {
    console.log("you are wrong")
    console.log("Your current score is " + score + "\n")
  }
}
var questions = [
  {
    question: `1. Let’s begin with an easy question, who is the Pokemon Anime’s main character?
  a: Ash
  b: Misty
  a: Pikachu
  b: Light
  \n` ,

    answer: "a"
  },

  {
    question: `2. Light Yagami is the main character of ….. anime.
  a: One piece
  b: Death Note
  c: Dragon Balls
  d: Fairy Tail	\n`,

    answer: "b"
  },
  {
    question: `3. “L “in “Death Note” anime is a girl.
  a: True
  b: False	\n`,

    answer: "b"
  },
  {
    question: `4. In the anime Attack on Titan, the main characters were trained in the army to fight against Titans. What are actually Titans?
  a: Giant monsters
  b: Giant people
  c: Giant dinosaurs
  d: Giant animals \n`,

    answer: "b"
  },
  {
    question: `5. How to run like Naruto, the main character in the anime of the same name?
  a: Put your arms back and head forward
  b: Put your right hand out, left foot in
  c: Put your left hand out, right foot in 
  d: None of the above
  \n`,

    answer: "a"
  },
  {
    question: `6. What is the meaning of Deku, the nickname of Izuku Midoriya in the anime My Hero Academia?
  a: A person who cannot do anything
  b: A nerd who loves playing game
  c: A good friend
  d: None of the above
  \n`,

    answer: "a"
  },
]

for (i = 0; i < questions.length; i++) {
  currentquestion = questions[i]

  play(currentquestion.question, currentquestion.answer)
}


if (score > 4) {
  console.log("YAY! You Scored: ", score);
  console.log("You Are a Anime Fan " + username + "-chan 😁 !!");
}
else {
  console.log("Oops !! You Should Watch Anime More " + username + " buddy !!");
}
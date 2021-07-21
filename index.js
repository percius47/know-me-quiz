 const readlineSync= require('readline-sync');
 const chalk= require('chalk');

//ex13, 14, 15:
console.log(chalk.greenBright.bgMagenta("  Let's find out how well you know me!!! \n"));

const userName= readlineSync.question(chalk.cyanBright("Please enter your name-> 😄\n"));

console.log(chalk.hex('#DEADED')("\nHi "+userName+". Get ready for Level 1. \nEnter a/ b/ c for each question to answer. For each correct answer you will get 2 points."));

//variable declaration for score and question-answers
let score=0;

const question1={
  que: "What do i do? \na. Teacher \nb.Racecar Driver \nc.Web Developer ",
  ans: "c",
  description:"See you forgot it again. I live in Bangalore."
};


const question2={
  que: "Where do i live? \na.Chennai \nb.Mumbai \nc.Bangalore ",
  ans: "c",
  description:"See you forgot it again. I live in Bangalore."
};
const question3={
  que: "Where do i work?\na.Tcs \nb.Tech M\nc.PwC",
  ans: "c",
  description:"Oh no! I work in PwC"
};
const question4={
  que: "Which food i like the most?\na.Pav Bhaji \nb.Pani puri \nc.Noodles",
  ans: "a",
  description:"I love all those items. But PavBhaji wins."
};
const question5={
  que: "Which movie is my favourite one?\na.Dead Silence \nb.Annabelle \nc.Thor: Ragnarok",
  ans: "c",
  description:"This one was easy. I hate horror movies. Correct Ans is c.Thor:Ragnarok"
};
const question6={
  que: "Which is my favourite series?\na.Walking Dead \nb.Boys over flowers \nc.HIMYM",
  ans: "c",
  description:"All time favourite. It's HIMYM"
};
const question7={
  que: "What is my birthdate?\na.25th July \nb.25th Aug \nc.25th Dec",
  ans: "c",
  description:"See you forgot it again. It's 11th Aug."
};
const question8={
  que: "Who is my favourite avenger?\na.Iron Man \nb.Thor \nc.Captain America",
  ans: "a",
  description:"Aww! you were close. I love Thor."
};
const question9={
  que: "Which is my favourite color?\na.Black \nb.Pista \nc.Blue",
  ans: "c",
  description:"Peacock Blue to be precise.  🙃"
};
const question10={
  que: "Who is my favourite singer?\na.Eminem \nb.Ed Sheeran \nc.James Arthur",
  ans: "b",
  description:"This one was tough. Correct ans is b.Ed Sheeran"
};
//saving all questions in array
const questionSet1=[ question1,question2, question3, question4, question5, question6, question7, question8, question9, question10];
//defining Leaderboard
const highScore=[
  {nameH:"A", scoreH:"20"},
  {nameH:"B", scoreH:"18"},
  {nameH:"C", scoreH:"16"},
  {nameH:"D", scoreH:"14"}
];

//posting quiz and validating answers
for(let i=0; i<questionSet1.length; i++){
if(i===3){
  if(score>=4){
  console.log("Congratulations! You have entered Level 2 🤩");
  }
  else{
    console.log("Aww! you failed level 1");
    break;
  }
}
if(i===6){
  if(score>=8){
  console.log("Congratulations! You have entered Final Level 🤩. Get ready for the toughest questions.");
  }
  else{
    console.log("Oops! you failed level 2");
    break;
  }
}
checkScore(i+1,questionSet1[i].que, questionSet1[i].ans, questionSet1[i].description);
}


//posting leaderboard
 console.log(chalk.keyword('orange').bold("\n*****Check out Leaderboard*****"));
 printScoreBoard(highScore);

 //compare score with high scores
let scoreBeaten=false;
let indexInsert=0;
for(let i=0; i<highScore.length; i++){
  if(score>=highScore[i].scoreH){
    scoreBeaten=true;
    indexInsert=i;
    highScore.splice(indexInsert, 0, {nameH:`${userName}`, scoreH:`${score}`});
    break;
  }
}
console.log('---------------------------------')

//Printing final score
console.log(chalk.hex('#DEADED').bold("Yay! Your Final Score is "+score));
//if score is beaten, print leaderboard with username and score

if(scoreBeaten){
  console.log(chalk.bold.keyword('blue')("Congratulations "+userName+" 🥳 , you are my best friend 😍"));
  
  console.log(chalk.keyword('orange').bold("\n*****Leaderboard*****"));
  printScoreBoard(highScore);
}

else{
  console.log(chalk.bold.hex('#DEADED')("Sorry "+userName+", you were so close to be my best friend 🙃"))
}



//function to validate answers and update score
function checkScore(queNo, checkQue, checkAns, description){
  
  const userAns= readlineSync.keyIn(chalk.cyanBright("\n"+queNo+") "+checkQue+ "\n"),{limit: '$<a-c>'});
  if(userAns===checkAns){
    console.log(chalk.green("You are absolutely right. You get 2 points 🎉"));
    score+=2;
  }
  else{
    console.log(chalk.redBright(`You are wrong.\n${description}`));
  }
  console.log(chalk.yellowBright("Your current score is " +score));
  console.log('---------------------\n');

}


//function to print leaderBoard
function printScoreBoard(highScore){
  for(let i=0; i<highScore.length; i++){
    console.log(chalk.keyword('orange').bold(highScore[i].nameH+" : " +highScore[i].scoreH));
  }
}

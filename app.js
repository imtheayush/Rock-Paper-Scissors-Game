let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice(){
    const choices = ['r' , 'p' , 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];

}
function convertToWord(letter)
{
    if(letter === "r") return "ROCK";
    if(letter === "p") return "PAPER";
    if(letter === "s") return "SCISSORS";
}
function win(user,computer){
    userScore++;
   userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   const smallUserWord = "user".fontsize(3).sub();
   const userChoiceDiv = document.getElementById(user);
   const smallCompWord = "comp".fontsize(3).sub();
   result_p.innerHTML = `${convertToWord(user)}${smallUserWord}  beats ${convertToWord(computer)}${smallCompWord} You WIN`;
    userChoiceDiv.classList.add('green-glow');
    setTimeout(() => userChoiceDiv.classList.remove('green-glow'),300);
}

function lose(user,computer){
    computerScore++;
    userScore_span.innerHTML = userScore;
    const userChoiceDiv = document.getElementById(user);
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${convertToWord(user)}${smallUserWord}  loses to  ${convertToWord(computer)}${smallCompWord} You LOST`;
    userChoiceDiv.classList.add('red-glow');
    setTimeout(() =>  userChoiceDiv.classList.remove('red-glow'),300);
}

function draw(user,computer){
    console.log("DRAW");
    const userChoiceDiv = document.getElementById(user);
    userScore_span.innerHTML = userScore;
   computerScore_span.innerHTML = computerScore;
   const smallUserWord = "user".fontsize(3).sub();
   const smallCompWord = "comp".fontsize(3).sub();
   result_p.innerHTML = `${convertToWord(user)}${smallUserWord}  and ${convertToWord(computer)}${smallCompWord} DRAWS. ITS A TIE!!`;
   userChoiceDiv.classList.add('gray-glow');
   setTimeout(() =>   userChoiceDiv.classList.remove('gray-glow'),300);
}

function game(userChoice){
  const computerChoice = getComputerChoice();
   switch(userChoice + computerChoice)
   {
       case "rs":
       case "pr":
       case "sp":
           win(userChoice,computerChoice);
           break;
        case "rp":
       case "ps":
       case "sr":
           lose(userChoice,computerChoice);
           break;
        case "rr":
       case "pp":
       case "ss":
            draw(userChoice,computerChoice);
           break;

   }
}









function main(){
    rock_div.addEventListener('click', () => game("r"));
     paper_div.addEventListener('click',() => game("p"));
     scissors_div.addEventListener('click', () => game("s"));
  
}

main();
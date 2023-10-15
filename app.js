let againBtn = document.querySelector('.againBtn');
let checkBtn = document.querySelector('.checkBtn');
let score = document.querySelector('.score');
let highScore = document.querySelector('.highScore');
let hint = document.querySelector('.hint');
let guess = document.querySelector('.inputNumber');

let highscore = 0;
let aScore = 20;

const randomNum= () => Math.trunc(Math.random() * 20) + 1;

let num = randomNum()
console.log(num);


const checkScore = function () {
    let guessText = guess.value;
    if(guess.value){
        if (guessText == num){
            document.querySelector('body').style.backgroundColor = "green";
            checkBtn.disabled = true;
            hint.innerHTML = "You Guessed It!"
            if (aScore > highscore){
                highscore = aScore;
                highScore.innerHTML = `Highscore : ${highscore}`
            }
        }
        else{
            aScore--;
            score.innerHTML = `Score: ${aScore}`;
    
            if (guessText < num){
                hint.innerHTML = "Your guess was too low!"
            }
            else if (guessText > num){
                hint.innerHTML = "Your guess was too high!"
            }
    
            if (aScore === 0){
                document.querySelector('body').style.backgroundColor = "red";
                hint.innerHTML = "You Lose!";
                checkBtn.disabled = true;
            }
        }
    }
    else if(!guess.value){
        hint.innerHTML = "You didn't put in a guess!"
    }
}

checkBtn.addEventListener("click", checkScore);


const again = function () {
    document.querySelector('body').style.backgroundColor = "black";
    aScore = 20;
    hint.innerHTML = "Start guessing...";
    num = randomNum();
    checkBtn.disabled = false;
    score.innerHTML = `Score: ${aScore}`;
    console.log(num);
    guess.value = "";
}

againBtn.addEventListener("click", again);



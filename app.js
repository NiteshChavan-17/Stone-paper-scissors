let UserScore = 0;
let CompScore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
let user_score = document.querySelector("#user-score");
let comp_score = document.querySelector("#comp-score");

const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
}

const draw = () => {
    console.log("It's a draw!");
    msg.innerText = "It's a draw!";
}

const showWinner = (userwin, Userchoice, Compchoice) => {
    if(userwin){
        console.log("You win");
        msg.innerText = `You win your ${Userchoice} beats computer's ${Compchoice}`;
        msg.style.backgroundColor = "green";
        UserScore++;
        user_score.innerText = UserScore;
    }
    else{
        console.log("You lose");
        msg.innerText =  `You lose comp's ${Compchoice} beats your ${Userchoice}`;
        msg.style.backgroundColor = "red";
        CompScore++;
        comp_score.innerText = CompScore;
    }
}
let playgame = (Userchoice) => {
    console.log("User choice:",Userchoice);

    const Compchoice = genComputerChoice();
    console.log("Computer Choice:",Compchoice);

    if(Userchoice === Compchoice) {
        draw();
    }
    else{
        let userwin = true;
        if(Userchoice === "rock"){1
            userwin = Compchoice === "paper" ? false : true;
        }
        else if(Userchoice=== "paper") {
            userwin = Compchoice === "scissors" ? false : true;
        }
        else{
            userwin = Compchoice === "rock" ? false : true;
        }
        showWinner(userwin, Userchoice, Compchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const Userchoice = choice.getAttribute("id");
        playgame(Userchoice);
    });
});
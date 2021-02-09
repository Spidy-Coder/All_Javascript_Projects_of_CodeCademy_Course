var userChoice = prompt("Do you have any choice from rock,paper,or scissors");
var computerChoice = Math.random();
if (computerChoice < 0.34){
    computerChoice === 'rock';
} 
else if(computerChoice <= 0.67){
    computerChoice === 'paper';
}
else{
    computerChoice === 'scissor'
}
var compare = function(choice1, choice2){
    if(choice1 === choice2){
        console.log("You both have tied.");
    }
    if(choice1 === 'rock'){
        if(choice2 === 'paper'){
            console.log("choice2 wins");
        }
        else{
            console.log("choice1 wins");
        }
    }
    if(choice1 === 'paper'){
        if(choice2 === 'scissor'){
            console.log("choice1 wins");
        }
        else{
            console.log("choice2 wins");
        }
    }
    if(choice1 === 'scissor'){
        if(choice2 === 'rock'){
            console.log("choice2 wins");
        }
        else{
            console.log("choice1 wins");
        }
    }

};

compare(userChoice,computerChoice);
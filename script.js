function game(){

    let i = 0;

    while(i < 3){

        var input1 = (prompt("Choose rock, paper, scissors..."));
        var input2 = (prompt("Your choice..."));

        if (input1 == "rock" && input2 == "rock"){
            document.getElementById("placeholder").innerHTML="You draw";

        }
        else if (input1 == "rock" && input2 == "paper"){
            document.getElementById("placeholder").innerHTML="Paper wins!";
        }
        else if (input1 == "rock" && input2 == "scissors"){
            document.getElementById("placeholder").innerHTML="Rock wins!";
        }
        else if (input1 == "paper" && input2 == "rock"){
            document.getElementById("placeholder").innerHTML="Rock wins!";
        }
        else if (input1 == "paper" && input2 == "paper"){
            document.getElementById("placeholder").innerHTML="You draw";
        }
        else if (input1 == "paper" && input2 == "scissors"){
            document.getElementById("placeholder").innerHTML="Scissors wins!";
        }
        else if (input1 == "scissors" && input2 == "rock"){
            document.getElementById("placeholder").innerHTML="Rock wins!";
        }
        else if (input1 == "scissors" && input2 == "scissors"){
            document.getElementById("placeholder").innerHTML="You draw!";
        }
        else if (input1 == "scissors" && input2 == "paper"){
            document.getElementById("placeholder").innerHTML="Scissors wins!";
        }
        else{
        document.getElementById("placeholder").innerHTML="Try Again"
        }
        
    }

    i++
}
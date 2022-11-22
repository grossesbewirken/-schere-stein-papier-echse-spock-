// F I L E S
import { useState } from 'react';


// S T Y L E S
import './App.css';


// F U N C T I O N
function App() {

  const player1 = "Maddin";
  const [input1, setInput1] = useState("");

  const player2 = "Computer";
  const choiceArray = ["scissors", "stone", "paper", "lizard", "spock"];
  const input2 = (choiceArray[Math.floor(Math.random()*5)]);




  // --> P L A Y E R 1   W I N S
  if(input1 === "scissors" && input2 === "paper"){
    return `scissors cuts paper!
    ${player1} wins!`
  };
  if(input1 === "paper" && input2 === "stone"){
    return `paper covers stone!
    ${player1} wins!`
  };
  if(input1 === "stone" && input2 === "lizard"){
    return`stone crushes lizard!
    ${player1} wins!`
  };
  if(input1 === "lizard" && input2 === "spock"){
    return`lizard poisons spock!
    ${player1} wins!`
  };
  if(input1 === "spock" && input2 === "scissors"){
    return`spock smashes scissors!
    ${player1} wins!`
  };
  if(input1 === "scissors" && input2 === "lizard"){
    return`scissors decapitates lizard!
    ${player1} wins!`
  };
  if(input1 === "lizard" && input2 === "paper"){
    return`lizard eats paper!
    ${player1} wins!`
  };
  if(input1 === "paper" && input2 === "spock"){
    return`paper disproves spock!
    ${player1} wins!`
  };
  if(input1 === "spock" && input2 === "stone"){
    return`spock vaporizes stone!
    ${player1} wins!`
  };
  if(input1 === "stone" && input2 === "scissors"){
    return`stone crushes scissors!
    ${player1} wins!`
  };

  // --> P L A Y E R 2   W I N S
  if(input2 === "scissors" && input1 === "paper"){
    return`scissors cuts paper!
    ${player2} wins!`
  };
  if(input2 === "paper" && input1 === "stone"){
    return`paper covers stone!
    ${player2} wins!`
  };
  if(input2 === "stone" && input1 === "lizard"){
    return`stone crushes lizard!
    ${player2} wins!`
  };
  if(input2 === "lizard" && input1 === "spock"){
    return`lizard poisons spock!
    ${player2} wins!`
  };
  if(input2 === "spock" && input1 === "scissors"){
    return`spock smashes scissors!
    ${player2} wins!`
  };
  if(input2 === "scissors" && input1 === "lizard"){
    return`scissors decapitates lizard!
    ${player2} wins!`
  };
  if(input2 === "lizard" && input1 === "paper"){
    return`lizard eats paper!
    ${player2} wins!`
  };
  if(input2 === "paper" && input1 === "spock"){
    return`paper disproves spock!
    ${player2} wins!`
  };
  if(input2 === "spock" && input1 === "stone"){
    return`spock vaporizes stone!
    ${player2} wins!`
  };
  if(input2 === "stone" && input1 === "scissors"){
    return`stone crushes scissors!
    ${player2} wins!`
  };

  // --> D R A W
  if(input1 === "scissors" && input2 === "scissors"){
    return "Itś a draw!"
  };
  if(input1 === "paper" && input2 === "paper"){
    return "Itś a draw!"
  };
  if(input1 === "stone" && input2 === "stone"){
    return "Itś a draw!"
  };
  if(input1 === "lizard" && input2 === "lizard"){
    return "Itś a draw!"
  };
  if(input1 === "spock" && input2 === "spock"){
    return "Itś a draw!"
  };


  return (
    <div className="App">

      <div className="select input1">
        <button onClick={()=>setInput1("scissors")} className="circle">scissors</button>
        <button onClick={()=>setInput1("stone")} className="circle">stone</button>
        <button onClick={()=>setInput1("paper")} className="circle">paper</button>
        <button onClick={()=>setInput1("lizard")} className="circle">lizard</button>
        <button onClick={()=>setInput1("spock")} className="circle">spock</button>
      </div>

      <div>
        <button>RESTART</button>
      </div>
    </div>
  );
}

export default App;
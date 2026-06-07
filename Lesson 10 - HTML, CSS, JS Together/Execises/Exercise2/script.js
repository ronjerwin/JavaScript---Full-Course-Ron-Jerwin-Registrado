const Game = JSON.parse(localStorage.getItem('Game')) || {
      wins: 0,
      losses: 0,
      ties: 0
    }
    console.log(Game)

     

    function pickComputerMove() {
      let computerMove = "";
      const randomNum = Math.floor(Math.random() * 3 + 1);
        if(randomNum == 1){
          computerMove = 'Rock';
        } else if (randomNum == 2) {
          computerMove = 'Paper';
        } else {
          computerMove = 'Scissors';
        }
        return computerMove;
    }
      const scoreStanding = document.querySelector('.scoreStanding');
    function pickUserMove(userPick) {
      const handleResult = document.querySelector('.handleResult');

      const winOrLose = document.querySelector('.winOrLose');

      const computerMove = pickComputerMove();
      if(computerMove === userPick){
      result = 'Tie.';
    } else if((computerMove === "Rock" && userPick === "Scissors") ||
              (computerMove === "Paper" && userPick === "Rock")  ||
              (computerMove === "Scissors" && userPick === "Paper")){
      result = 'You Lose';
    } else {
      result = 'You Win';
    } 

    if(result === 'You Win') {
      
      Game.wins += 1;
    } else if(result === 'You Lose') {
      Game.losses += 1;
    } else if(result === 'Tie.') {
      Game.ties += 1;
    }

    localStorage.setItem('Game', JSON.stringify(Game));
    winOrLose.textContent = result;
    handleResult.innerHTML = `You
      <img src="images/${userPick}.png" class="pickResult">
      <img src="images/${computerMove}.png" class="pickResult">
      Computer
      `;
    ScoreStanding()
    }

    function ScoreStanding() {
      scoreStanding.textContent = `Wins: ${Game.wins}, Loses: ${Game.losses}, Ties: ${Game.ties}`;
    }

    ScoreStanding()
    

    
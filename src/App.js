function towerBreakers(n, m) {
  // Write your code here
  
  const towers = new Array(n).fill(m);
  console.log(towers)
  const completedMoves = [];
  const playerOne = towers[Math.floor(Math.random() * n)];
  const playerTwo = towers[Math.floor(Math.random() * n)];
  console.log(playerOne)
  const genratePossibleMoves = (value, height) => {
      const moves = [];
      console.log(value);
      for (let i = value - 1; i > 0; i--) {
          const ttry = value - i;
          console.log(ttry, ' first');
          console.log(value - ttry);
          
          if (value % (ttry) === 0) {
              moves.push(value - ttry);
              console.log(value - ttry)
          }
      }
      
      return moves;
  }
  
  if (m % 2 === 0) {
      const playerOneSelectedTower = playerOne;
      console.log(playerOneSelectedTower, m);
      if (playerOneSelectedTower % 2 === 0) {
          genratePossibleMoves(playerOneSelectedTower, m);
      }
  }
  console.log(genratePossibleMoves(7, 7));
}
towerBreakers(1, 7);
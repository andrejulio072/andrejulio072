const team = {
  _players: [
    { firstName: "Roger", lastName: "Bishop", age: 23 },
    { firstName: "Katrina", lastName: "Alvarez", age: 25 },
    { firstName: "Andre", lastName: "Garcia", age: 26 },
    { firstName: "Lidia", lastName: "Maria", age: 22 },
  ],
  _games: [
    { opponent: "Flamengo", teamPoints: 42, opponentPoints: 39 },
    { opponent: "Vasco", teamPoints: 45, opponentPoints: 57 },
    { opponent: "Sao Paulo", teamPoints: 35, opponentPoints: 12 },
    { opponent: "Corinthians", teamPoints: 25, opponentPoints: 15 },
  ],
  get players() {
    return this._players;
  },
  get games() {
    return this._games;
  },
  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      age: newAge,
    };
    this.players.push(player);
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    };
    this.games.push(game);
  },
};

team.addPlayer("Bugs", "Bunny", 76);
console.log(team.players);

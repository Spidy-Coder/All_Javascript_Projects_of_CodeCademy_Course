const team = {
    _players : [{
        firstName:'Pete',
        lastName:'Wheeler',
        age:54
    },{
        firstName:'Mike',
        lastName:'Wheiner',
        age:42
    },{
        firstName:'Mark',
        lastName:'Rashford',
        age:32
    }
    ],

    _games:[{
        opponent:'Broncos',
        teamPoints:42,
        opponentPoints:27
    },{
        opponent:'Lemur',
        teamPoints:14,
        opponentPoints:21
    },{
        opponent:'Ashton',
        teamPoints:14,
        opponentPoints:21
    }],

    get players(){
        return this._players;
    },

    get games(){
        return this._games;
    },

    addPlayer(firstName,lastName,age){
        const newPlayer = {
            firstName:firstName,
            lastName:lastName,
            age:age
        };
        this._players.push(newPlayer);
    },

    addGame(opponentName,teamPoints,opponentPoints){
        const newGame = {
            opponent:opponentName,
            teamPoints:teamPoints,
            opponentPoints:opponentPoints
        };
        this._games.push(newGame);
    }


};

team.addPlayer('Parit','Jian',28);

team.addGame('Steve gryls',1,3);

console.log(team.players);
console.log();
console.log(team.games);
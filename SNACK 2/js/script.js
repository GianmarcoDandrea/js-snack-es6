//SNACK 2
const teams = [
    {
        name: "team1",
        points: 0,
        fouls: 0

    },
    {
        name: "team2",
        points: 0,
        fouls: 0

    },
    {
        name: "team3",
        points: 0,
        fouls: 0

    },
    {
        name: "team4",
        points: 0,
        fouls: 0


    },
    {
        name: "team5",
        points: 0,
        fouls: 0

    },
    {
        name: "team6",
        points: 0,
        fouls: 0

    },
    {
        name: "team7",
        points: 0,
        fouls: 0

    }
];

let newTeamArray = [];

teams.forEach (curTeam => {
    curTeam.fouls = genarateRandomNumber(1, 100);
    curTeam.points = genarateRandomNumber(1, 100);
});

console.log(teams);

teams.forEach((curTeam) => {
    let newTeamElem = {};
    const {name, fouls} = curTeam;
    console.log(name, fouls);
    
    
    newTeamElem["name"] = name
    newTeamElem["fouls"] = fouls

    newTeamArray.push(newTeamElem)
});

console.log(newTeamArray);

// CORREZIONE 
const newTeams = teams.map((team) => {
    const {name, fouls} = team;
    console.log(name, fouls);

    return {
        name,
        fouls
    }
})

console.log(newTeams);


// FUNCTIONS
/**funzione che ha in entrata un numero massimo e un numero minimo e da in uscita un numero random.
 *
 * @param {min number} a
 * @param {max number} b
 * @returns {random number}
 */
function genarateRandomNumber(a,b) {

    let random = Math.floor(Math.random() * b) + a;
    return random;
}
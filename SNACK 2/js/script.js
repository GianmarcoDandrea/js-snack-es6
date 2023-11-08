
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

let newteamArray;
let newElem;
for (let i = 0; i < teams.length; i++) {
    teams[i].fouls = genarateRandomNumber(1, 100);
    teams[i].points = genarateRandomNumber(1, 100);

}
console.log(teams)





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
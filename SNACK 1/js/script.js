//SNACK 1
const bikes = [    
    {
        name: "bike1",
        weigth: 52

    }, 
    {
        name: "bike2",
        weigth: 57

    }, 
    {
        name: "bike3",
        weigth: 48

    }, 
    {
        name: "bike4",
        weigth: 60

    }, 
    {
        name: "bike5",
        weigth: 35

    }, 
    {
        name: "bike6",
        weigth: 42

    }, 
    {
        name: "bike7",
        weigth: 61

    }
];

let result = bikes[0].weigth;
let index = 0;

bikes.forEach((bike, i) => {
    const {name, weigth} = bike;

    if (weigth < result) {
        result = weigth;
        index = i;
    }

    console.log(name, weigth)
});

console.log(result, bikes[index].name);
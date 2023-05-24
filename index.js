// Prompt #1: 
// In "the Hunger Games", there are 12 districts, each of which send a tribute to fight in the games. As the capital's resident web developer, you've been given the job of writing a program that can automatically read out the names of all hunger games contestants.

// Write a function called declareTributes that accepts one parameter called listOfTributes, which will be an array of objects. That parameter could receive an argument value like this: 

let listOfTributes = [
    {
        name: "Katniss Everdeen",
        district: 12
    },
    {
        name: "Cato",
        district: 2
    }
]

// Your function should output a new array, where each element is a string written in this format:

// [
//   "Katniss Everdeen from District 12",
//   "Cato from District 2"
// ]

// Use one of the array looping methods to solve this puzzle. 

// function declareTributes(data){
//     for(i=0; 1<data.length; i++){
//         const nextlvl = data[i]
//         console.log(`${nextlvl.name} from district ${nextlvl.district}`)
//     }
// }

// declareTributes(listOfTributes)

// function declareTributes(arr){
//     let newArr = arr.map((el) => {
//         return `${el.name} from district ${el.district}`
//     })
//     console.log(newArr)
// }

// declareTributes(listOfTributes)

function declareTributes(data){
    console.log(`${data.name} from district ${data.district}`)
}

listOfTributes.forEach(declareTributes)



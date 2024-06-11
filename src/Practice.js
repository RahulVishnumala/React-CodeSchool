
    // Array Destructuring
    // const [name,subject] = ["Rahul","Maths"]
    // console.log(name);
    // console.log(subject);

// Object Destructuring
// const {name,subject,roll} = {
//     name:"Rahul",
//     subject:"Maths",
//     roll: 1
// }
// console.log(name,subject,roll);

const {one: {name}, two: {name: name1}} = {
    one:{
        name:"Rahul",
        subject:"Maths",
    },
    two:{
        name:"Mohan",
        subject:"Science",
    }
}
console.log(name);
console.log(name1);
 
import {useState} from 'react'
const App = () =>{
    return(
        <div>
            <h1>CodingOtt</h1>
            <button>Click me</button>
        </div>
    )
}

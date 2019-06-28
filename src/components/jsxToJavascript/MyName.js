import React from 'react'
import Greeting from "./Greeting";

//Jsx begin with "<"
//Javascript in jsx begin with "{"
function MyName() {
    const firstName="Ranga"
    const LastName="Lankathilaka"
    return(
        <div>
        <Greeting/>
        <h1>Mr. {firstName+" "+LastName}</h1>
        </div>
    )
}

export default MyName
import React from "react"


function Joke(props) {


    return (

        <div>

            <h3 style={{display: props.joke.quection ? "block" : "none"}}>Question: {props.joke.quection}</h3>
            <p>Answer: {props.joke.answer}</p>
            <hr/>
        </div>


    )
}

export default Joke
import React from "react"
import Joke from "./Joke";

function JokeList() {
    return(

        <div>
        <Joke
        joke={{quection:"How are you",answer:"I am fine :)"}}

        />

        <Joke
    joke={{quection:"How old are you",answer:"94 years old :)"}}

    />

            <Joke
                joke={{answer:"he he :)"}}

            />

        </div>

    )
}
export default JokeList
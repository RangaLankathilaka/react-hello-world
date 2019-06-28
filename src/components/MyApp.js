import React from "react";

//funtional component from directry(./components/MyApp->(MyApp.js))-----------------------------------------------------
function MyApp(){
    return (
        <div>
            <h1>Hello This is reusable component</h1>
            <p>This is a paragraph</p>
        <ul>
            <li>Home</li>
            <li>FAQs</li>
            <li>About us</li>
        </ul>
        </div>
    )
}

export default MyApp
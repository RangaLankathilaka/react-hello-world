import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

//funtional component from directry(./components/MyApp->(MyApp.js))-----------------------------------------------------
import MyApp from "./components/MyApp";
import Parent from "./components/parentchildcomponent/Parent";
import MyName from "./components/jsxToJavascript/MyName";
import Greeting from "./components/InlineStyle/Greeting";
import MyToDo from "./components/toDoList/MyToDo";
import ContactCard from "./components/ContactCard/ContactCard";
import PageCardDetail from "./components/ContactCard/PageCardDetail";
import JokeList from "./components/JokeQandA/JokeList";
import MyArray from "./components/Array/MyArray";

import Product from "./components/ProductDataListWithArray/Product";
import ProductApp from "./components/ProductDataListWithArray/ProductApp";
import ClassBasedComponentApp from "./components/ClassBasedComponent/ClassBasedComponentApp";
import GreetingApp from "./components/ClassBasedComponentPractise/GreetingApp";
import StateApp from "./components/State/StateApp";
import StatePractiseApp from "./components/State Practise/StatePractiseApp";

//======================================================================================================================
//-----///\\\------->>>>> HELLO REACT JS :) <<<<<----------///\\\-------------------------------------------------------
//======================================================================================================================

// app component--------------------------------------------------------------------------------------------------------
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );


//paragraph-------------------------------------------------------------------------------------------------------------

// var myNewParagraph=document.createElement("p")
// myNewParagraph.innerHTML="this is my first paragraph"


//unordered list--------------------------------------------------------------------------------------------------------
// ReactDOM.render(
//     <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//
//     </ul>,
//     document.getElementById('root')
// );

//funtional component---------------------------------------------------------------------------------------------------

// function MyApp() {
//     return (
//         <ul>
//             <li>1</li>
//             <li>2</li>
//             <li>3</li>
//         </ul>)
// }
//  ReactDOM.render(
//
//     <MyApp/>,
//     document.getElementById('root')
// );

//funtional component from directry(./components/MyApp->(MyApp.js))-----------------------------------------------------

// ReactDOM.render(
//
//     <MyApp/>,
//     document.getElementById('root')
// );

//parent/child component------------------------------------------------------------------------------------------------
//parentchildcomponent directry<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ReactDOM.render(
//     <Parent/>,
//     document.getElementById("root")
// )

//JSX to JavaScript and Back--------------------------------------------------------------------------------------------
//jsxToJavascript directry<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

//ReactDOM.render(<MyName/>,document.getElementById("root"))


//Inline Styles with the style property---------------------------------------------------------------------------------
//InlineStyle directry<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ReactDOM.render(
//     <Greeting/>,document.getElementById("root")
// )

//to Do List------------------------------------------------------------------------------------------------------------
//toDoList directry<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ReactDOM.render(
//     <MyToDo/>,document.getElementById("root")
// )


//Contact Card List-----------------------------------------------------------------------------------------------------
//Contact Card directry<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ReactDOM.render(
//     <PageCardDetail/>,document.getElementById("root")
// )


//Joke List-------------------------------------------------------------------------------------------------------------
//JokeQandA directry<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
//Hide element
// ReactDOM.render(
//     <JokeList/>,document.getElementById("root")
// )


//Array-----------------------------------------------------------------------------------------------------------------
//Array directry<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ReactDOM.render(
// <MyArray/>,document.getElementById("root")
//
// )



//Product data array List-----------------------------------------------------------------------------------------------
//ProductDataListWithArray directry<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ReactDOM.render(
// <ProductApp/>,document.getElementById("root")
//
// )



//Class based components------------------------------------------------------------------------------------------------
//ClassBasedComponent directry<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ReactDOM.render(
// <ClassBasedComponentApp/>,document.getElementById("root")
//
// )

//Class based components practise---------------------------------------------------------------------------------------
//ClassBasedComponentPractise directry<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
// ReactDOM.render(
//     <GreetingApp/>,document.getElementById("root")
//
// )

//State-----------------------------------------------------------------------------------------------------------------
//State directry<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


//State Practise-----------------------------------------------------------------------------------------------------------------
//StatePractise directry<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<
ReactDOM.render(
    <StatePractiseApp/>,document.getElementById("root")

)


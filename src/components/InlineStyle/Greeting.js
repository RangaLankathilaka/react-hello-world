import React from 'react'


function Greeting() {
    const date=new Date()
    const hourse=date.getHours()
    let timeOfDay

    if(hourse < 12){
        timeOfDay="morning"
    }else if (hourse >=12 && hourse <17){
        timeOfDay="afternoon"
    }
    else {
        timeOfDay="night"
    }

    //define css style
    const stylesMyPage ={
        color : "#FF8C88",
        backgroundColor:"#FF2D00",
        fontSize:"100px"
    }

    return(
        //background-colorr:"#FF2D00" this hyphen(-) is not allowing in JS ,so when we use css ,
        // use camel case avoiding this (backgroundColor)
        <div>

        <h2 style={{color : "#FF8C88",backgroundColor:"#FF2D00"}}>Good {timeOfDay}!! You are welcome</h2>

            <h2 style={stylesMyPage}>This is second way to apply inline css</h2>


        </div>
    )
}

export default Greeting
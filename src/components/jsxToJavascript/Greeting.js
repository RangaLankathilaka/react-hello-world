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

    return(
        <h2>Good {timeOfDay}!! You are welcome</h2>
    )
}

export default Greeting
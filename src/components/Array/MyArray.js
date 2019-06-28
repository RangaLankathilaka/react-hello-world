import React from "react"

function MyArray() {
    const numArray=[12,3,65,54,6,64,66,43,67,89];
    const numMultiply=numArray.map(function (num) {
        return num*2 +" "
    })


    console.log(numMultiply)


return(
    <div>{numMultiply}</div>

);

}

export default MyArray
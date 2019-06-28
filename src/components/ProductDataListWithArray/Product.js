import React from "react"

function Product(props) {
    return(
        <div>

            <h2>{props.productDataList.name}</h2>\
            <p>{props.productDataList.price}</p>
        </div>
    )
}

export default Product
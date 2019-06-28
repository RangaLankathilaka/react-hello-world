import React from "react"

import Product from "./Product";
import {productDataList} from "./ProductDetailArrayList";


function ProductApp() {

//adding key is compulsory otherwise it gives warning
    const productComponents = productDataList.map(item => <Product key={item.id} productDataList={item}/>)
    console.log(productComponents)




    return (

        <div>
            {productComponents}
        </div>
    )
}

export default ProductApp
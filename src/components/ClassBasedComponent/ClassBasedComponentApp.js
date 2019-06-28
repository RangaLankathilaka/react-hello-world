import React from "react"

//every class has 'render' method
//when we use props in class based must add 'this'
class ClassBasedComponentApp extends React.Component{

    myMethodTest(){
        return 2*2
    }

    render() {
        this.myMethodTest()
        return(
            <div>
                <h1>Code goes here</h1>
                <h1>{this.props.whatever}</h1>
            </div>
        )

    }
}

export default ClassBasedComponentApp
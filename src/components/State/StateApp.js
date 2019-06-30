import React ,{Component} from "react"

//props is immutable (cannot change data after assign)-this.props
//state can change data-this.state
//constructor must have super() method
//state is an object
//state can change later,if we want
class StateApp extends Component {

    constructor(){
        super()
        this.state={
            answer:"Ranga"
        }
}

render(){
        return(
            <div>What is yor name?{this.state.answer}</div>
        )
}

}

export default StateApp
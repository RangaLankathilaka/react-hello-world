import React ,{Component} from "react"
//2.21
//props is immutable (cannot change data after assign)-this.props
//state can change data-this.state
//constructor must have super() method
//state is an object
//state can change later,if we want
class StatePractiseApp extends Component {

    constructor(){
        super()
        this.state={
            IsLoggedIn:false

        }
    }

    render(){

        let wordDisplay
        if(this.state.IsLoggedIn){
            wordDisplay="In"
        }
        else{
            wordDisplay="Out"
        }
        return(
            <div>


                <h1>You are currently Logged {wordDisplay}</h1>
            </div>
        )
    }

}

export default StatePractiseApp
import React ,{Component} from "react"

class GreetingApp extends Component{
    render() {
        return(
            <div>
                <Header username="Ranga"/>
                <Greeting/>
                <h1>hello</h1>
            </div>
        )
    }
}


class Header extends Component{

    render() {
        return(
            <header>
                <p>Welcome, {this.props.username}</p>
            </header>
        )
    }


}

class Greeting extends Component{

    render() {

        const date=new Date()
        const hour=date.getHours()
        let timeOfDay


        if(hour<12){
            timeOfDay="Morning"
        }else{
            timeOfDay="Evening"
        }

        return(
            <h1>Hi {timeOfDay} to you,sir</h1>
        )
    }


}

export default GreetingApp
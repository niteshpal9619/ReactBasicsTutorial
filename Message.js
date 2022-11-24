import {React,Component} from 'react'

class Message extends Component {

    constructor(){
        super()
        this.state={
            info:"Welcome Visitor"
        }
    }

    changeText(){
        this.setState({
            info:"I am clicked..."
        })
    }

    render(){
        return(
            <div>
                <h3>{this.state.info}</h3>
                <button onClick={()=>this.changeText()}>Click Me</button>
            </div>        
        )
    }
} 
export default Message
import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
        super(props)
  
        this.state = {
        message:'Hello'
        }
        //this.ClickMe=this.ClickMe.bind(this)    
  }
  
    /*ClickMe(){
        this.setState({
            message:'Good Bye..'
        })
    }*/

    ClickMe=()=>{
        this.setState({
            message:'thank you for click'
        })
    }

  render() {
    return (
      <div>
            <h3>{this.state.message}</h3>
            {/*<button onClick={this.ClickMe.bind(this)}>Click Me</button>*/}
            {/*<button onClick={()=>this.ClickMe()}>Click Me</button>*/}
            {/*<button onClick={this.ClickMe}>Click Me</button>*/}
            <button onClick={this.ClickMe}>Click Me onc'e</button>
        </div>
    )
  }
}

export default EventBind

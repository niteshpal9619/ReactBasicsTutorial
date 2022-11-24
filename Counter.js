import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }

    // increment() {
    //     this.setState({
    //         count:this.state.count+1
    //         //console.log(count)
    //     },()=>{
    //         console.log('callback value :',this.state.count)
    //     })
    //     console.log(this.state.count)
    // }

    increment() {
        this.setState(previousState=>({
           count:previousState.count+1 
        }))
    }
    
    increment5(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() { 
    return (
      <div>
            <h3>this is counter: {this.state.count}</h3>
            <button onClick={()=>this.increment5()}>Increment on Click</button>
      </div>
    )
  }
}

export default Counter

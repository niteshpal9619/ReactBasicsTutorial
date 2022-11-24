import React, { Component } from 'react'

export class ClassEvents extends Component {

    ClickMe(){
        console.log('Button is clicked')
    }
  render() {
    return (
      <div>
        <button onClick={this.ClickMe}>Click Me</button>
      </div>
    )
  }
}

export default ClassEvents

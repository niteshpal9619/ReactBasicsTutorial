import React, { Component } from 'react'

export default class Forms extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         username:'',
         comment:'',
         topic:''
      }
    }

    handelTextChange=(event)=>{
        this.setState({
            username:event.target.value
        })
    }

    handelCommentChange=(event)=>{
        this.setState({
            comment:event.target.value
        })
    }

    handelTopicChange=(event)=>{
        this.setState({
            topic:event.target.value
        })
    }

    handelSubmit=(event)=>{
        console.log(this.state.username)
        console.log(this.state.comment)
        console.log(this.state.topic)  
        event.preventDefault()
    }
    
  render() {
    return (
      <form onSubmit={this.handelSubmit}>
        <label>User name</label>
        <input type='text' value={this.state.username} onChange={
         this.handelTextChange}></input>
        <div>
            <label>Comments</label>
            <textarea value={this.state.comment} onChange={this.handelCommentChange}></textarea>
        </div>
        <div>
            <label>Topic</label>
            <select value={this.state.topic} onChange={this.handelTopicChange}>
                <option value='X1'>X1</option>
                <option value='X2'>X2</option>
                <option value='X3'>X3</option>
                <option value='X4'>X4</option>
            </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    )
  }
}

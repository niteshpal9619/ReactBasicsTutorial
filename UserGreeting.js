import React, { Component } from 'react'

export class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Islogin:false
      }
    }
    
  render() {

    // if (this.state.Islogin){
    //         return(
    //             <div>
    //                 Welcome Nitesh
    //             </div>
    //         )
    // }
    // else{
    //     return(
    //         <div>Welcome Guest</div>
    //     )
    // } 

    // let message1
    // if (this.state.Islogin){
    //     message1=<div>Welcome Nitesh</div>
    // }
    // else{
    //     message1=<div>Welcome Guest</div>
    // }
    // return <div>
    //     <h1>{message1}</h1>
    // </div>

    return(
        this.state.Islogin?<div>Welcome nitesh</div>:<div></div>
    )
  }
}

export default UserGreeting
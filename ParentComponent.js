import React, { Component } from 'react'
import ChildCompone from './ChildComponent';
     
     export class ParentComponent extends Component {

        constructor(props) {
          super(props)
        
          this.state = {
             parentName:'Parent'
          }
          this.GreetParent=this.GreetParent.bind(this);
        }

        GreetParent(clield){
            alert(`hello ${this.state.parentName} from ${clield}`)
        }
        
       render() {
         return (
           <div>
             <ChildCompone GreetHander={this.GreetParent}></ChildCompone>
           </div>
         )
       }
     }
     
     export default ParentComponent
     
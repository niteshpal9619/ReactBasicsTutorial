import React from 'react'

function Events() {
    function ClickMe(){
        console.log('Button Click')
    }
  return (
    <div>
      <button onClick={ClickMe}>Click</button>
    </div>
  )
}
export default Events
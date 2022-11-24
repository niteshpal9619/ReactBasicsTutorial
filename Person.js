import React from 'react'

function Person({person}) {
  return (
    <div>
      <h2>my name is {person.name} my gender is {person.Gender}</h2>
    </div>
  )
}

export default Person

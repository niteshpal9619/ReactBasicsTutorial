import React from 'react'
import Person from './Person'

function NameList() {
    const names=[
        {
            id:1,
            name: 'Nitesh',
            Gender:'Male'
        },
        {
            id:2,
            name:'Vishal',
            Gender:'Male'
        },
        {
            id:3,
            name:'Shanker',
            Gender:'Male'
        },
        {
            id:4,
            name:'Ghandhi',
            Gender:'Male'
        }
    ]
    const nameList=names.map(person=> <Person key={person.id} person={person}></Person>)
    return (
    <div>{nameList}</div>
  )
}

export default NameList

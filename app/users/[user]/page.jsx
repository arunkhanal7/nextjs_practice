import React from 'react'
//dynamic routing folder name in big bracket and params is used to access the differnet information about the differnet people
const user = ({params}) => {
  return (
    <>
    <h1>Information about the {params.user}</h1>

    <div>Hello I am {params.user}</div>
    
    </>
    
  )
}

export default user
import React from 'react'
import CardContainer from '../components/cardContainer'

const Signup = () => {
  return (
    <CardContainer
      bgcolor="success"
      opacity="10"
      header={<>Sign Up</>}
      body={<p>This is the signup component.</p>}
    />
  )
}

export default Signup

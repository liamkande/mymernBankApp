import React, { useEffect, useState } from 'react'
import CardContainer from '../components/cardContainer'

const Home = () => {
  const warningStyle: React.CSSProperties = {
    color: 'red',
    fontSize: '.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  }
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('api/data')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
  }, [])

  return (
    <CardContainer
      align="center"
      txtcolor="black"
      header={message}
      title="Welcome to my MIT Bank App!"
      text="In our educational bank app, you can access checking and saving accounts."
      body={
        <>
          <img
            alt="bank"
            src="https://img.icons8.com/external-photo3ideastudio-solid-photo3ideastudio/512/000000/external-bank-public-service-photo3ideastudio-solid-photo3ideastudio.png"
            className="img-fluid"
          />
          <br />
          <div
            style={{
              fontSize: '.6rem',
            }}
          ></div>
          <p style={warningStyle}>For educational use only.</p>
        </>
      }
    />
  )
}

export default Home
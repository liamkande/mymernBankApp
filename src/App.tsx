import React from 'react'
import CardContainer from './cardContainer'
import './App.css'

function App() {
  const warningStyle = {
    color: 'red',
    fontSize: '.8rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  }

  return (
    <CardContainer
      align="center"
      txtcolor="black"
      header="Mern Bank App"
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
          >
            <a
              target="_blank"
              rel="noreferrer"
              href="https://icons8.com/icon/tx3AdinOQ2kf/bank"
            >
              Bank
            </a>{' '}
            icon by{' '}
            <a target="_blank" rel="noreferrer" href="https://icons8.com">
              Icons8
            </a>
          </div>
          <p style={warningStyle}>For educational use only.</p>
        </>
      }
    />
  )
}

export default App

import React, { useState, ChangeEvent, FormEvent } from 'react'
import CardContainer from '../components/cardContainer'
import { FaSignInAlt } from 'react-icons/fa'

const passwordContainer: React.CSSProperties = {
  display: 'flex',
  position: 'relative',
}

const Deposit: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log('submit')
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))

  return (
    <CardContainer
      bgcolor="success"
      opacity="10"
      header={<>Sign In</>}
      body={
        <>
          <form onSubmit={handleSubmit}>
            Email
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              value={email}
              onChange={onChange}
            />
            <br />
            Password
            <br />
            <div style={passwordContainer}>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                placeholder="Enter password"
                value={password}
                onChange={onChange}
              />
            </div>
            <br />
            <button type="submit" className="btn btn-outline-success">
              <FaSignInAlt /> Log In
            </button>
          </form>
        </>
      }
    />
  )
}

export default Deposit

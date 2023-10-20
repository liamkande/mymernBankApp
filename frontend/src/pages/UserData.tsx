import React, { useState, ChangeEvent, FormEvent } from 'react'
import CardContainer from '../components/cardContainer'
import { FaUserPlus } from 'react-icons/fa'

const passwordContainer: React.CSSProperties = {
  display: 'flex',
  position: 'relative',
}

const UserData: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { name, email, password } = formData

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
      header={<>User Data</>}
      body={
        <>
          <form onSubmit={handleSubmit}>
            Name
            <br />
            <input
              type="input"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter name"
              value={name}
              onChange={onChange}
            />
            <br />
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
              <FaUserPlus /> Sign Up
            </button>
          </form>
        </>
      }
    />
  )
}

export default UserData

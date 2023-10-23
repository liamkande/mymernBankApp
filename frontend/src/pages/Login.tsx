import React, { useState, ChangeEvent, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import {login} from '../auth/userAuth' // Import your login action
import CardContainer from '../components/cardContainer'
import { FaSignInAlt } from 'react-icons/fa'
import { ThunkDispatch } from 'redux-thunk'

const passwordContainer: React.CSSProperties = {
  display: 'flex',
  position: 'relative',
}

const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  const { email, password } = formData

  const dispatch = useDispatch<ThunkDispatch<any, undefined, any>>()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const userFromLocalStorage = localStorage.getItem('user');
    if (userFromLocalStorage) {
      const user = JSON.parse(userFromLocalStorage);
      if (user.email === email && user.password === password) {
        dispatch(login(user));
        console.log('user is valid');
      }
      if(user.email !== email || user.password !== password) {
        alert('user is not valid')
      }
    }
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
              type="email" // Use type 'email' for email input
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

export default Login

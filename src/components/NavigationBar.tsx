import React, { useEffect, useState } from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import './styles/navigation.css'

export const NavigationBar: React.FC = () => {
  const [title, setTitle] = useState<string>('Home')

  useEffect(() => {
    document.title = title
  }, [title])

  return (
    <Navbar
      collapseOnSelect
      id="navbar"
      expand="md"
      className="sticky-top navbar"
      style={{ backgroundColor: '#cae9ed' }}
    >
      <Container>
        <Navbar.Brand>
          <h2>
            Mern Bank App
            <sub style={{ fontSize: '.75rem' }}> by @liamkande </sub>
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle
          className="navbar-toggler fw-bolder text-black"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded={false}
          aria-label="Toggle navigation"
        />
        <Navbar.Collapse id="collapse navbar-collapse">
          <Nav className="me-auto navbar-collapse justify-content-end">
            <Nav.Link
              onClick={() => {
                setTitle('Home')
              }}
              href="/"
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setTitle('Signup')
              }}
              href="/signup"
            >
              Sign Up
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setTitle('Deposit')
              }}
              href="/deposit"
            >
              Deposit
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setTitle('Withdraw')
              }}
              href="/withdraw"
            >
              Withdraw
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setTitle('Balance')
              }}
              href="/balance"
            >
              Balance
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setTitle('All Data')
              }}
              href="/userdata"
            >
              User Data
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setTitle('Log In')
              }}
              href="/login"
            >
              Log Out
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationBar

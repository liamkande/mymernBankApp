const express = require('express')
const cors = require('cors')
const dal = require('./dal.js')
const app = express()
const port = 3000

// Serve static files from the 'frontend' directory
app.use(express.static('frontend'))
app.use(cors())

// Create a user account
app.get('/account/create/:name/:email/:password', (req, res) => {
  const { name, email, password } = req.params

  // Check if the account exists
  dal.find(email).then((users) => {
    // If the user exists, return an error message
    if (users.length > 0) {
      console.log('User already exists')
      res.send('User already exists')
    } else {
      // Create the user
      dal.create(name, email, password).then((user) => {
        console.log(user)
        res.send(user)
      })
    }
  })
})

// Login a user
app.get('/account/login/:email/:password', (req, res) => {
  const { email, password } = req.params

  dal.find(email).then((user) => {
    // If the user exists, check the password
    if (user.length > 0) {
      if (user[0].password === password) {
        res.send(user[0])
      } else {
        res.send('Login failed: wrong password')
      }
    } else {
      res.send('Login failed: user not found')
    }
  })
})

// Find a user account by email
app.get('/account/find/:email', (req, res) => {
  const { email } = req.params

  dal.find(email).then((user) => {
    console.log(user)
    res.send(user)
  })
})

// Find one user by email (alternative to 'find')
app.get('/account/findOne/:email', (req, res) => {
  const { email } = req.params

  dal.findOne(email).then((user) => {
    console.log(user)
    res.send(user)
  })
})

// Update account balance (deposit/withdraw amount)
app.get('/account/update/:email/:amount', (req, res) => {
  const { email, amount } = req.params
  const numericAmount = Number(amount)

  dal.update(email, numericAmount).then((response) => {
    console.log(response)
    res.send(response)
  })
})

// Get a list of all accounts
app.get('/account/all', (req, res) => {
  dal.all().then((docs) => {
    console.log(docs)
    res.send(docs)
  })
})

// Start the server
app.listen(port, () => {
  console.log('Server is running on port: ' + port)
})

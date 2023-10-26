const MongoClient = require('mongodb').MongoClient
const express = require('express')
const passport = require('passport')
const passportJWT = require('passport-jwt')
const jwt = require('jsonwebtoken')

const url = 'mongodb://localhost:27017'
let db = null

// Connect to MongoDB
MongoClient.connect(url, { useUnifiedTopology: true })
  .then((client) => {
    console.log('Connected successfully to the database')
    // Connect to the 'myproject' database
    db = client.db('myproject')
  })
  .catch((err) => console.error('Error connecting to the database:', err))

const ExtractJwt = passportJWT.ExtractJwt
const JwtStrategy = passportJWT.Strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'your_secret_key', // Replace with your secret key for JWT
}

// Initialize Passport
passport.use(
  new JwtStrategy(jwtOptions, (jwt_payload, done) => {
    // Check if the user exists in the database
    db.collection('users')
      .findOne({ email: jwt_payload.email })
      .then((user) => {
        if (user) {
          return done(null, user)
        } else {
          return done(null, false)
        }
      })
      .catch((err) => done(err, false))
  })
)

const app = express()
app.use(express.json())
app.use(passport.initialize())

// Middleware to protect routes with authentication
const authenticateJWT = passport.authenticate('jwt', { session: false })

// Create user account
function create(name, email, password) {
  return new Promise((resolve, reject) => {
    const collection = db.collection('users')
    const doc = { name, email, password, balance: 0 }
    collection
      .insertOne(doc, { w: 1 })
      .then((result) => resolve(doc))
      .catch((err) => reject(err))
  })
}

// Find user account
function find(email) {
  return new Promise((resolve, reject) => {
    db.collection('users')
      .find({ email: email })
      .toArray()
      .then((docs) => resolve(docs))
      .catch((err) => reject(err))
  })
}

// Find one user by email (alternative to 'find')
function findOne(email) {
  return new Promise((resolve, reject) => {
    db.collection('users')
      .findOne({ email: email })
      .then((doc) => resolve(doc))
      .catch((err) => reject(err))
  })
}

// Update - deposit/withdraw amount (protected route)
function update(email, amount) {
  return new Promise((resolve, reject) => {
    db.collection('users')
      .findOneAndUpdate(
        { email: email },
        { $inc: { balance: amount } },
        { returnOriginal: false }
      )
      .then((result) => resolve(result))
      .catch((err) => reject(err))
  })
}

// Get all users (protected route)
function all() {
  return new Promise((resolve, reject) => {
    db.collection('users')
      .find({})
      .toArray()
      .then((docs) => resolve(docs))
      .catch((err) => reject(err))
  })
}

// Routes
app.post('/login', (req, res) => {
  const { email, password } = req.body
  // Validate user credentials (you can use bcrypt for password hashing and validation)
  // If valid, create a JWT token
  const token = jwt.sign({ email }, jwtOptions.secretOrKey)
  res.json({ token })
})

app.post('/create', (req, res) => {
  // Authenticate user before allowing account creation
  authenticateJWT(req, res, () => {
    const { name, email, password } = req.body
    create(name, email, password)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json({ error: err.message }))
  })
})

app.get('/users', (req, res) => {
  // Authenticate user before allowing access to all users
  authenticateJWT(req, res, () => {
    all()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json({ error: err.message }))
  })
})

app.put('/update/:email', (req, res) => {
  // Authenticate user before allowing account update
  authenticateJWT(req, res, () => {
    const { email } = req.params
    const { amount } = req.body
    update(email, amount)
      .then((result) => res.json(result))
      .catch((err) => res.status(500).json({ error: err.message }))
  })
})

const port = 3000
app.listen(port, () => {
  console.log('Server is running on port ' + port)
})

module.exports = { create, findOne, find, update, all }

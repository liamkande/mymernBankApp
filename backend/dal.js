const { MongoClient } = require('mongodb')
const url = 'mongodb://localhost:27017'
const dbName = 'myproject'

// Function to connect to the MongoDB database
async function connectToDatabase() {
  try {
    const client = await MongoClient.connect(url, { useUnifiedTopology: true })
    console.log('Connected successfully to db server')
    return client.db(dbName)
  } catch (error) {
    throw error
  }
}

// Create a user account
async function create(name, email, password) {
  try {
    const db = await connectToDatabase()
    const collection = db.collection('users')
    const doc = { name, email, password, balance: 0 }
    const result = await collection.insertOne(doc)
    return result.ops[0]
  } catch (error) {
    throw error
  }
}

// Find user accounts
async function find(email) {
  try {
    const db = await connectToDatabase()
    const collection = db.collection('users')
    return await collection.find({ email }).toArray()
  } catch (error) {
    throw error
  }
}

// Find one user account (alternative to 'find')
async function findOne(email) {
  try {
    const db = await connectToDatabase()
    const collection = db.collection('users')
    return await collection.findOne({ email })
  } catch (error) {
    throw error
  }
}

// Update - deposit/withdraw amount
async function update(email, amount) {
  try {
    const db = await connectToDatabase()
    const collection = db.collection('users')
    const result = await collection.findOneAndUpdate(
      { email },
      { $inc: { balance: amount } },
      { returnOriginal: false }
    )
    return result.value
  } catch (error) {
    throw error
  }
}

// Get all user accounts
async function all() {
  try {
    const db = await connectToDatabase()
    const collection = db.collection('users')
    return await collection.find({}).toArray()
  } catch (error) {
    throw error
  }
}

module.exports = { create, findOne, find, update, all }

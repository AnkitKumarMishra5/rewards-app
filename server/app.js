const express = require('express')
const cors = require('cors')
require('dotenv').config()

const connectToDB = require('./config/db')
const getUser = require('./jobs/getUser')
const createUser = require('./jobs/createUser')
const updateScore = require('./jobs/updateScore')

const app = express()
app.use(express.json())
app.use(cors())

connectToDB()

app.get('/users/:id', async (req, res) => {
  try {
    const data = await getUser(req.params.id)
    if (!data) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json(data)
  } catch (error) {
    console.error('Error fetching user data:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.post('/users', async (req, res) => {
  try {
    const { username } = req.body
    const user = await createUser(username)
    res.json(user)
  } catch (error) {
    console.error('Error creating user:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.post('/click', async (req, res) => {
  try {
    const { userId } = req.body
    const result = await updateScore(userId)
    if (!result) {
      return res.status(404).json({ error: 'User not found' })
    }

    res.json(result)
  } catch (error) {
    console.error('Error updating score:', error)
    res.status(500).json({ error: 'Internal Server Error' })
  }
})

app.listen(process.env.PORT || 5000, () => console.log('Server ready to use'))
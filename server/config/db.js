const mongoose = require('mongoose')

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectToDB
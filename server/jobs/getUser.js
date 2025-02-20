const User = require('../models/User')

const getUser = async (userId) => {
  try {
    const user = await User.findById(userId)
    return user
  } catch (error) {
    console.error('Error fetching user data:', error)
    return null
  }
}

module.exports = getUser
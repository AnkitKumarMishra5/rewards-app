const User = require('../models/User')

const createUser = async (username) => {
  try {
    let user = await User.findOne({ username })
    if (!user) {
      user = new User({ username })
      await user.save()
    }
    return user
  } catch (error) {
    console.error('Error creating user:', error)
    return null
  }
}

module.exports = createUser
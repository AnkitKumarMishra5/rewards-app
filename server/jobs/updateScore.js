const User = require('../models/User')

const updateScore = async (userId) => {
  try {
    const random = Math.random()
    let points = 1
    let prizeWon = false, extraPoints = false

    if (random < 0.5) {
      points += 9
      extraPoints = true
    }
    if (random < 0.25) prizeWon = true

    const user = await User.findById(userId)
    if (!user) return null

    user.score += points
    if (prizeWon) user.prizes += 1
    await user.save()

    return { 
      ...user.toJSON(),
      prizeWon,
      extraPoints
    }
  } catch (error) {
    console.error('Error updating score:', error)
    return null
  }
}

module.exports = updateScore
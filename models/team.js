
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const playerSchema = new Schema({
	name: String,
    age: Number,
	bio: String,
    image: String
})

const Player = mongoose.model('Player', playerSchema)

module.exports = Player
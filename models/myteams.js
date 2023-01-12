
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const teamSchema = new Schema({
	name: String,
    age: Number,
	bio: String,
    image: String,
    start: Boolean,
})

const MyTeam = mongoose.model('MyTeam', teamSchema)

module.exports = MyTeam

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const scoreSchema = new Schema({
	name: String,
    points: Number,
	episode: Number
})

const score = mongoose.model('score', scoreSchema)

module.exports = score
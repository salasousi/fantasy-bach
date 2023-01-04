
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const liveSchema = new Schema({
	title: String,
	body: String
})

const livechat = mongoose.model('livechat', liveSchema)

module.exports = livechat
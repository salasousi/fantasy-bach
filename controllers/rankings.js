
const express = require('express')
const router = express.Router()
const Player = require('../models/team.js')

//I
router.get('/', (req, res) => {
	if (req.session.currentUser) {
		Player.find({}, (error, player) => {
			res.render('rankings/index.ejs', {
				currentUser: req.session.currentUser,
				player
			})
		})
	} else {
		Player.find({}, (error, player) => {
			res.render('index.ejs', {
				currentUser: req.session.currentUser,
				player
		})
	})
	}
})
module.exports = router
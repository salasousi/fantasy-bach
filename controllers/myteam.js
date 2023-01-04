
const express = require('express')
const router = express.Router()
const User = require('../models/user.js');

//I
router.get('/', (req, res) => {
	if (req.session.currentUser) {
		res.render('myteam/index.ejs', {
			currentUser: req.session.currentUser
		});
	} else {
		res.render('index.ejs', {
			currentUser: req.session.currentUser
		});
	}
})

module.exports = router
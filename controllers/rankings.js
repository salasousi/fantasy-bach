
const express = require('express')
const router = express.Router()

//I
router.get('/', (req, res) => {
	if (req.session.currentUser) {
		res.render('rankings/index.ejs', {
			currentUser: req.session.currentUser
		});
	} else {
		res.render('index.ejs', {
			currentUser: req.session.currentUser
		});
	}
})

module.exports = router
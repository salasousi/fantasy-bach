
const express = require('express')
const router = express.Router()
const Player = require('../models/team.js')
const score = require('../models/rankings.js')

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

//U
router.put('/', (req, res) => {
	score.findByIdAndUpdate(req.params.id, req.body, () => {
		res.redirect('/')
	})
})

//E
router.get('/:id/edit', (req, res) => {
    if (req.session.currentUser) {
        Player.findById(req.params.id, (err, foundPlayer) => {
            res.render('rankings/edit.ejs', {
                player: foundPlayer,
                currentUser: req.session.currentUser
            })
        })
    }
})

//S



module.exports = router
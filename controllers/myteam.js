
const express = require('express')
const router = express.Router()
const Player = require('../models/team.js')

//I
router.get('/', (req, res) => {
	if (req.session.currentUser) {
		res.render('myteam/index.ejs', {
			currentUser: req.session.currentUser,
            player: foundPlayers
		})
	} else {
		res.render('index.ejs', {
			currentUser: req.session.currentUser
		})
	}
})

///N
router.get('/', (req, res) => {
    if (req.session.currentUser) {
	    res.render('myteam/new.ejs', {
            currentUser: req.session.currentUser
        })
    } else {
        res.render('index.ejs', {
            currentUser: req.session.currentUser
        })
    }
})

///D
router.delete('/:id', (req, res) => {
	Player.findByIdAndRemove(req.params.id, () => {
		res.redirect('/myteam')
	})
})

///U
router.put('/:id', (req, res) => {
	Player.findByIdAndUpdate(req.params.id, req.body, () => {
		res.redirect('/myteam')
	})
})

///C
router.post('/', (req, res) => {
	Player.create(req.body, (err, createdPlayer) => {
		res.redirect('/myteam')
	})
})

///E
router.get('/:id/edit', (req, res) => {
	Player.findById(req.params.id, (err, foundPlayer) => {
		res.render('myteam/edit.ejs', {
			player: foundPlayer
		})
	})
})




module.exports = router
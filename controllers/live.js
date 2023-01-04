const express = require('express')
const router = express.Router()
const livechat = require('../models/live.js')


//Index

router.get('/', (req, res) => {
        livechat.find({}, (err, foundLive) =>{
            if (req.session.currentUser) {
                res.render('live/index.ejs', {
                    live: foundLive,
                    currentUser: req.session.currentUser
                })
            } else {
                res.render('index.ejs', {
                    currentUser: req.session.currentUser
                })
            } 
	    })
})



//New
router.get('/new', (req, res) => {
    if (req.session.currentUser) {
	    res.render('live/new.ejs', {
            currentUser: req.session.currentUser
        })
    } else {
        res.render('index.ejs', {
            currentUser: req.session.currentUser
        })
    }
})

//Delete
router.delete('/:id', (req, res) => {
	livechat.findByIdAndRemove(req.params.id, () => {
		res.redirect('/live')
	})
})

//Update
router.put('/:id', (req, res) => {
	livechat.findByIdAndUpdate(req.params.id, req.body, () => {
		res.redirect('/live')
	})
})

//Create
router.post('/', (req, res) => {
	livechat.create(req.body, (err, createdLive) => {
		res.redirect('/live')
	})
})


//Show
router.get('/:id', (req, res) => {
	livechat.findById(req.params.id, (err, foundLive) => {
		res.render('live/show.ejs', {
			live: foundLive
		})
	})
})


module.exports = router
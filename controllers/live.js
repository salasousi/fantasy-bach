const express = require('express')
const router = express.Router()
const livechat = require('../models/live.js')


//Index

router.get('/', (req, res) => {
    livechat.find({}, (err, foundLive) =>{
        res.render('live/index.ejs', {
            live: foundLive,
            currentUser: req.session.currentUser
        })
        })
})



//Delete-- NEED TO FIGURE OUT AUTHENTICATION FOR DELETE GRANTED ONLY TO USER WHO POSTED
router.delete('/:id', (req, res) => {
    // if (req.session.currentUser) {
 	livechat.findByIdAndRemove(req.params.id, () => {
		 res.redirect('/live')
        // currentUser: req.session.currentUser
        // })
    })
//     } else {
//            res.render('index.ejs', {
//                 currentUser: req.session.currentUser
//              })
//  	}
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

const express = require('express')
const router = express.Router()
const Player = require('../models/team.js')
const userRouter = require('./users.js')
const MyTeam = require('../models/myteams.js')


//I
router.get('/', (req, res) => {
	if (req.session.currentUser) {
		MyTeam.find({}, (error, player) => {
			res.render('myteam/index.ejs', {
				currentUser: req.session.currentUser,
				player
			})
		})
	} else {
		MyTeam.find({}, (error, player) => {
			res.render('index.ejs', {
				currentUser: req.session.currentUser,
				player
		})
	})
	}
})

///N
router.get("/new", (req, res) => {
    if (req.session.currentUser) {
        Player.find({}, (error, player) => {
            res.render("myteam/new.ejs", {
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
    



///D
router.delete('/:id', (req, res) => {
    // if (req.session.currentUser) {
 	MyTeam.findByIdAndRemove(req.params.id, () => {
		 res.redirect('/myteam')
        // currentUser: req.session.currentUser
        // })
    })
//     } else {
//            res.render('index.ejs', {
//                 currentUser: req.session.currentUser
//              })
//  	}
 })

///U
router.put('/', (req, res) => {
    Player.findByIdAndUpdate(req.params.id, req.body, () => {
        res.redirect('/myteam');
    });
});



///C
router.post('/', (req, res) => {
    MyTeam.create(req.body, (err, createdPlayer) => {
        res.redirect("/myteam")
    })
})


///E


///S
router.get('/:id', (req, res) => {
    if (req.session.currentUser) {
        Player.findById(req.params.id, (err, foundPlayer) => {
            res.render('myteam/index.ejs', {
                player: foundPlayer,
                currentUser: req.session.currentUser
            })
        })
    }
})




module.exports = router
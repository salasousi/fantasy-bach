
const express = require('express')
const router = express.Router()
const Player = require('../models/team.js')

//I
router.get('/', (req, res) => {
	if (req.session.currentUser) {
		Player.find({}, (error, player) => {
			res.render('myteam/index.ejs', {
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

///N
router.get('/add', (req, res) => {
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
// router.delete('/:id', (req, res) => {
// 	Player.findByIdAndRemove(req.params.id, () => {
// 		res.redirect('/myteam')
// 	})
// })

///U
router.put('/myteam/:id', (req, res) => {
    if (req.session.currentUser) {
	Player.findByIdAndUpdate(req.params.id, req.body, () => {
		res.redirect('/myteam', {
            currentUser: req.session.currentUser
        })
	})
} else {
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    })
}
})

// router.put("/myteam/:id", (req, res) =>{
//     Player.findByIdAndUpdate(
//         req.params.id, 
//         req.body, 
//         {
//             new: true,

//  },
//     (error, updatedPlayer)=>{
//          res.redirect(`/myteam/${req.params.id}`)
// }
// )
// })


///C
router.post('/myteam', (req, res) => {
    if (req.session.currentUser) {
	Player.create(req.body, (err, createdPlayer) => {
		res.redirect('/myteam', {
            currentUser: req.session.currentUser,
	})
})
} else {
    res.render('index.ejs', {
        currentUser: req.session.currentUser
    })
}
})

///E
// router.get('/:id/edit', (req, res) => {
// 	Player.findById(req.params.id, (err, foundPlayer) => {
// 		res.render('myteam/edit.ejs', {
// 			player: foundPlayer
// 		})
// 	})
// })




module.exports = router
// Dependencies
const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const session = require('express-session')
const methodOverride = require('method-override')
const Player = require('./models/team.js')



// Database Configuration
mongoose.connect(process.env.DATABASE_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true
})

// Database Connection Error / Success
const db = mongoose.connection
db.on('error', (err) => console.log(err.message + ' is mongod not running?'))
db.on('connected', () => console.log('mongo connected'))
db.on('disconnected', () => console.log('mongo disconnected'))


// Middleware
// Body parser middleware: give us access to req.body
app.use(express.urlencoded({ extended: true }))

app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false
    }))

app.use(methodOverride('_method'))


// Routes / Controllers
const userController = require('./controllers/users')
app.use('/users', userController)

const sessionsController = require('./controllers/sessions')
app.use('/sessions', sessionsController)

const liveController = require('./controllers/live.js')
app.use('/live', liveController)

const rulesController = require('./controllers/rules.js')
app.use('/rules', rulesController)

const teamController = require('./controllers/myteam.js')
app.use('/myteam', teamController)


const rankingsController = require('./controllers/rankings.js')
app.use('/rankings', rankingsController)




////I
app.get('/', (req, res) => {
	if (req.session.currentUser) {
		Player.find({}, (error, player) => {
			res.render('dashboard.ejs', {
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



////N
////D
////U
////C
////E
////S

// app.get("/:id", (req, res) => {
//     Player.findById(req.params.id, (error, foundPlayer)=>{
//         res.render("myteam/index.ejs", {
//             Player: foundPlayer
//         })
//     })
// })



// Listener
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`server is listening on port: ${PORT}`))
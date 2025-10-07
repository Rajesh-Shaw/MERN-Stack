import express from 'express'
const app = express()
// const mongoose = require('mongoose')
import mongoose from 'mongoose'


// ====== Middleware ======
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))

// ======== Database Connection =======
mongoose.connect('mongodb://127.0.0.1:27017/contacts-crud').then(() => {console.log('Database Connected.')})

// ====== Routes ======
app.get('/', (req,res) => { res.render('home') })

app.get('/show-contact', (req,res) => { res.render('show-contact') })

app.get('/add-contact', (req,res) => { res.render('add-contact') })

app.post('/add-contact', (req,res) => {})

app.get('/update-contact', (req,res) => { res.render('update-contact') })

app.post('/update-contact', (req,res) => {})

app.get('/delete-contact', (req,res) => {})





app.listen((3000), () => {
    console.log('App listening on port 3000!');
});
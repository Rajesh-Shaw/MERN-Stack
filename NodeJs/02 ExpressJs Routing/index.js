const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Successfully Connected on port 3000.');
})

app.get('/', (req, res) => {
    res.send("<h1>Welcome to Home Page</h1>");
})


app.get('/about', (req,res) => {
    res.send("<h1>About Page</h1>")
})

app.get('/gallery', (req,res) => {
    res.send("<h1>Gallery Page</h1>")
})



app.get('/about/user', (req,res) => {
    res.send("<h1>User Page</h1>")
})



app.get('/random.text', (req,res) => {
    res.send("<h1>Random Page</h1>")
})



app.get('/user/:userid/book/:bookid', (req,res) => {
    // res.send(req.params)
    // res.send(req.params.bookid)
    res.send("Book Id : " + req.params.bookid)

})


app.get('/users/:userid-:bookid', (req,res) => {
    res.send(req.params)
    // res.send(req.params.bookid)
    // res.send("Book Id : " + req.params.bookid)

})


app.get('/search', (req,res) => {
    // res.send(req.query)
    const name =req.query.name
    const age =req.query.age
    res.send(`Search results for Name : ${name}, Age : ${age}`)
    
})
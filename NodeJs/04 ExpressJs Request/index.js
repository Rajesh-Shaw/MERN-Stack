/*

_______Properties_____

- req.params
- req.query
- req.body
- req.cookies

- req.hostname
- req.ip
- req.ips
- req.method
- req.originalUrl
- req.path
- req.protocol
- req.secure
- req.route




______Methods_______
req.accepts     --> HTML, JSON, XML
req.get
req.is          --> JSON, form data or plain text
req.range




*/

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Successfully Connected on port 3000.');
})

app.use(express.json())
app.use(express.urlencoded({extended: false}))





/*
// req.params
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
*/






/*
// req.query
app.get('/search', (req,res) => {
    // res.send(req.query)
    const name =req.query.name
    const age =req.query.age
    res.send(`Search results for Name : ${name}, Age : ${age}`)
    
})

*/





/*


// req.body
app.post('/about', (req,res) => {
    // res.send(req.body)

})
*/


/*

*/
app.get('/user', (req,res) => {
    // res.send(req.hostname)
    // res.send(req.ip)
    // res.send(req.ips)
    // res.send(req.method)
    // res.send(req.originalUrl)
    // res.send(req.path)
    // res.send(req.protocol)
    // res.send(req.secure)
    res.send(req.route)







})


/*
ExpressJS Response Methods

res.send()      ->  Text, HTML, Object, Array, Buffers
res.json()      ->  JSON (JavaScript Object Notation)
res.jsonp()     ->  JSONP (JSON with Padding)
res.redirect()
res.render()     ->  Open HTML File using a template engine
res.download()    -> PDF, Image File, Music, Video, Excel etc..
res.sendFile()
res.end()
res.sendStatus()
res.headersSent()
res.set()
res.get()

*/

const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Successfully connected on port 3000');
})


/*
// res.send() 
app.get('/', (req, res) => {
    // res.send('Welcome to Home page');

    // res.send(
    //     {
    //         name : "Rajesh",
    //         age: 25
    //     }
    // )

    res.send(
        ['Apple','Banna','Mango']
    )
})

*/



/*
// res.json()  
app.get('/', (req, res) => {
    // res.json('Welcome to Home page');

    // res.json(
    //     {
    //         name : "Rajesh",
    //         age: 25
    //     }
    // )


    const users = [
        {id : 1, name : 'Rajesh'},
        {id : 2, name : 'Raj'}

    ]

    res.json(users)
})
    */



/*
// res.jsonp() 

app.get('/', (req, res) => {
    // res.json('Welcome to Home page');

    res.jsonp(
        {
            name : "Rajesh",
            age: 25
        }
    )


    // const users = [
    //     {id : 1, name : 'Rajesh'},
    //     {id : 2, name : 'Raj'}

    // ]

    // res.json(users)
})
*/



/*
res.redirect()
app.get('/about', (req, res) => {
    //    res.redirect('/user')
    //    res.redirect('https://www.google.com')
    //    res.redirect(301,'https://www.google.com')
       res.redirect('..')


})

app.get('/user', (req, res) => {
    res.send('User page');

})
*/






/*
// res.render()

app.set('view engine', 'ejs')

app.get('/render', (req, res) => {
    res.render('user')

})
 /*



/*





// res.download()
app.get('/download', (req, res) => {
    // res.download('./files/keyboard-shortcuts.pdf')
    res.download('./files/keyboard-shortcuts.pdf', 'Document.pdf')


})
*/






/*

// res.sendFile()
app.get('/sendFile', (req, res) => {
    // res.sendFile('./files/keyboard-shortcuts.pdf')
    res.sendFile(__dirname + '/files/keyboard-shortcuts.pdf')


})
*/





/*

// res.end()
app.get('/end', (req, res) => {
   res.write('This is Testing')
    res.end()


})
*/






/*

// res.sendStatus()
app.get('/error', (req, res) => {
    // res.sendStatus(404)
    // res.sendStatus(200)
    // res.sendStatus(403)
    // res.sendStatus(404)
    // res.sendStatus(500)
    // res.sendStatus(503)
    res.sendStatus(504)

})
*/







/*

// res.status()
app.get('/status', (req, res) => {
    
    res.status(200).send("Hello")

})

*/






/*

// res.headerSend()
app.get('/check', (req, res) => {
    console.log(res.headersSent)
    res.send("Hello")
    console.log(res.headersSent)
})
*/



/*
*/
// res.set()  & res.get()
app.get('/check', (req, res) => {
    res.set('custom-header', 'hello123')
    console.log(res.get('custom-header'))
    res.send("Header set")
})
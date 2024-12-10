
// imports express into our project 
const express = require('express') 

//create the express server inside a variable called app
const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.use(express.static('public'))

// import a package for handlebars
const expressHandlebars = require('express-handlebars')

// make express use the handlebars template engine
app.engine('handlebars',expressHandlebars.engine({
    defaultLayout: 'main',
}))

//app.get('/co', handler.co)

app.set('view engine','handlebars')

//const handler = require('./lib/handler')

const PORT = process.env.port || 3000
//import app wide data
const gallery = require("./data/gallery.json")

app.get('/co',(req,res)=>{
    console.log(req.query)
})

//process routes before error
app.get('/',(request,response)=>{
    const data = require("./data/home-data.json")
    response.render('home',{
        data
        })
})

app.get('/about',(request,response)=>{
    const data = require("./data/about-data.json")
    response.render('about',{
        gallery,
        data
    })
})

app.get('/presson',(request,response)=>{
    const data = require("./data/presson-data.json")
    response.render('landing',{
        data
    })
})

app.get('/gal',(request,response)=>{
    console.log(gallery)
    response.render('landing',{
        gallery
    })
})

app.get('/polish',(request,response)=>{
    const data = require("./data/polish-data.json")
    response.render('landing',{
        data
        })
})

app.get('/supply',(request,response)=>{
    const data = require("./data/supply-data.json")
    response.render('landing',{
        data
    })
})

app.get('/cart',(request,response)=>{
    const data = require("./data/cart-data.json")
    response.render('landing',{
        data
    })
})

//this triggers a server error
app.get('/500',(req,res)=>{
    response.type('text/plain')
    response.send('Need help? Contact Us')
})
//Handle the error first
//NOT FOUND!
app.use((request,response)=>{
    response.status(404)
    response.render('404')
 })

 //SERVER ERROR :(
 app.use((error,request,response,next)=>{
    console.log(error.message)
    response.status(500)
    response.render('500')
 })

 app.listen(PORT, ()=>{
    console.log(`Express is running on http://localhost:${PORT} `)
    console.log('Press ctrl-c to terminate')
 })





// imports express into our project 
const express = require('express') 

//create the express server inside a variable called app
const app = express()

app.use(express.static('public'))

// import a package for handlebars
const expressHandlebars = require('express-handlebars')

// make express use the handlebars template engine
app.engine('handlebars',expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine','handlebars')

const PORT = process.env.port || 3000
//import app wide data
const gallery = require("./data/gallery.json")

//process routes before error
app.get('/',(request,response)=>{
    console.log(gallery)
    const data = require("./data/home-data.json")
    response.render('landing',{
        gallery,
        data
        })
})

app.get('/beach',(request,response)=>{
    const data = require("./data/beach-data.json")
    response.render('landing',{
        data
    })
})

app.get('/culi',(request,response)=>{
    const data = require("./data/culi-data.json")
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

app.get('/cult',(request,response)=>{
    const data = require("./data/cult-data.json")
    response.render('landing',{
        data
        })
})

app.get('/nl',(request,response)=>{
    const data = require("./data/nl-data.json")
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





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
    response.render('landing',{
        gallery,
        title:"This is Miami!",
        abstract:"Miami is a great place to live.",
        image:"mbsky.jpg"
        })
})

app.get('/about',(request,response)=>{
    response.render('page',{
        title:"About Miami",
        abstract:"From the Miami Marlins to the Miami Heat, there is a lot to see."
    })
})

app.get('/nl',(request,response)=>{
    response.render('page',{
        title:"About Miami's Nightlife",
        abstract:"Club Space, Level2, and Many More Clubs Ready for You to Explore."
    })
})

app.get('/page',(request,response)=>{
    response.render('page',{
        title:"Miami is a sleepless city, vibes that last a lifetime!",
        abstract:"Day stuff"
    })
})

app.get('/galp',(request,response)=>{
    console.log(gallery)
    response.render('page',{
        gallery,
        title:"This is a Gallery",
        abstract:"A bunch of pics.",
        image:"mbsky.jpg"
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


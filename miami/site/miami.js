//imports express into our project
const express = require('express')

const app = express()
//import a package for handlebars
const expressHandlebars = require('express-handlebars')
//make express use the handlebars template engine
app.engine('handlebars', expressHandlebars.engine({
   defaultLayout: 'main',
}))
app.set('view engine', 'handlebars')


const PORT = process.env.port || 3000
//process routes before error
app.get('/',(request,response)=>{
  response.render('home')
})

app.get('/about',(request,response)=>{
   response.render('about')
})

app.get('/gallery',(request,response)=>{
   response.render('gallery')
})

app.get('/nightlife',(request,response)=>{
   response.render('nightlife')
})

//this triggers a server error req=/ request res=/ response
app.get('/history',(req,res)=>{
   response.type('text/plain')
   response.send('Miami Clubs to Visit!')
})

//handle errors first
app.use( (request, response)=>{
    response.status(404)
    response.render('404')
 })

 //server error :(
 app.use((error,request,response,next)=>{
    console.log(error.message)
    response.status(500)
    response.render('500')
 })

 app.listen(PORT, ()=>{
    console.log(`Express is running on http://localhost:${PORT}`)
    console.log('Press ctrl-c to terminate')
 })

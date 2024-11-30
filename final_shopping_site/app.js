//npm i body-parser
// npm install express 
// npm install express-handlebars 
// sudo npm install express 
// sudo npm install express-handlebars 
//Initialize Express
const express = require('express')

//add the handlebars view engine 
const expressHandlebars = require('express-handlebars') 
const { newsletterSignup } = require('./lib/handler')

const app = express()

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

//configure our express app to use handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine','handlebars')
//ends handlebar configuration

const handler = require('./lib/handler')

const port = process.env.port || 3000
app.get("/",(req,res)=>{
    res.render('page',{req})
})

app.get("/about",(req,res)=>{
    const data = require('./data/about.json')
    res.render('about',{data})
})

//details page
app.get('/category1/details/:id', (req,res)=>{
    const data = require('./data/category1.json')
    //filter the data tp only get what matches id
    data = data.filter((product)=>{
        return product.id == req.params.id
    })

    res.render('details',{"data":data,"req":req})
})


//Error handling ->  app.use() basic express route 
app.use((req,res) => {
    res.status(404)
    res.render('404')
})

//Server Error 500
app.use((error,req,res,next) => {
    console.log(error.message)
    res.status(500)
    res.render('500') 
}) 

// setup listener
app.listen(port,()=>{
    console.log(`Server started http://localhost:${port}`)
    //console.log('Server starter http://localhost:'+port)
    console.log('To close pres Ctrl-C')
})
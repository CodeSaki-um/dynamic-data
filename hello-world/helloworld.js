const http = require('https')
//^crucial for any server

const PORT = process.env.PORT || 3000
//3000 and 8080 r available

const server = http.createServer( (request,response) => {
    console.log("***********************************")
    console.log("***********************************")

    console.log(request.url)
    console.log(request.method) //get post put delete
    // get = read operation of database
    // post = create "" ""
    // put = update
    // delete = delete


    //how to respond to requests

    //response.send("Home Page") not as frequently used, but works similar

    if(request.url == "/") {
        //execute statement
        response.writeHead(200 , { "Content-Type" : "Text/Plain" })
    response.end("Home Page")
    }

    else if(request.url == "/contact") {
        //execute statement
        response.writeHead(200, { "Content-Type" : "Text/Plain" })
    response.end("Contact Page")
    }

    else if(request.url == "/about") {
        //execute statement
        response.writeHead(200, { "Content-Type" : "text/plain" })
    response.end("About Page")
    }

    else if(request.url == "/gallery") {
        //execute statement
        response.writeHead(200, { "Content-Type" : "text/html" })
    response.end("<html><head><title>Page Title</title></head><body><h1>My first HTML response</h1></body></html>")
    }

    else{
        response.writeHead(400, { "Content-Type" : "text/plain" })
    response.end("Page Not Found error 400")

    }



    //basic conditions
    /**
     * equals: == because = is an assignment operator
     * not equal: if a != b
     * greater than: if a > b
     * less than: if a < b
     * greater than or equal: if a >= b
     */


    console.log("responding to request")
    

    console.log("***********************************")
    console.log("***********************************")
})

server.listen(PORT, ()=> console.log(`server started on port http://localhost:${PORT}  press ctrl + c to stop` ))

// var name = "john" 
// var age = 23.5
// let lastName = "smith"
// const year = 2024

// javascript object notation aka json
// var printer = { color:"black", size:"small", price:29.99}
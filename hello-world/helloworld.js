const http = require('http')
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

    if(request.url == "/") {
        //execute statement
        response.writeHead(200,{"Content-Type":"text/plain"})
    response.end("Home Page")
    }


    if(request.url == "/contact") {
        //execute statement
        response.writeHead(200,{"Content-Type":"text/plain"})
    response.end("Contact Page")
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
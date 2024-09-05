const http = require('http')
//^crucial for any server

const PORT = process.env.PORT || 3000
//3000 and 8080 r available

const server = http.createServer((request,response) => {
    console.log(request)
    console.log("responding to request")
    response.writeHead(200,{"Content-Type":"text/plain"})
    response.end("Hello World")
})

server.listen(PORT, ()=> console.log('server started on port ${PORT}; ' + 'press Ctrl-c to terminate.....'))

// var name = "john" 
// var age = 23.5
// let lastName = "smith"
// const year = 2024

// javascript object notation aka json
// var printer = { color:"black", size:"small", price:29.99}
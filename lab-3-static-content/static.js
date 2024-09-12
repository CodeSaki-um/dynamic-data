//function IS constant


const http = require('http')
//^crucial for any server

const fs = require("fs")

const PORT = process.env.PORT || 8080;

const functionName = (parameter1, parameter2, parameter3) => {
    //write code to be executed by the function
    console.log("functionName was called")
    console.log(parameter1)
    console.log(parameter2)
    console.log(parameter3)
}
//create a function to read files and display them

const displayPage = (path,res,contentType, responseCode = 200) => {
    fs.readFile(__dirname + path , (errors, content) => {
        if(errors){
            res.writeHead(500,{'Content-type':'text/plain'})
            return res.end('500 - Internal Error')
        }
        res.writeHead(responseCode,{"Content-Type" : contentType})
        res.end(content)
    })
}

const server = http.createServer( (request,response) => {

    console.log(request.url)
    console.log(request.method) //get post put delete

    var path = request.url

    switch(path) {
        case '':
        case '/':
        displayPage('/public/home.html',response, 'text/html')
        break
        case '/about':
        displayPage('/public/about.html',response, 'text/html')
        break
        case '/contact':
        displayPage('/public/contact.html',response, 'text/html')
        break
        case '/logo':
            displayPage('/public/plate.png',response, 'image/png')
            break
        default:
        displayPage('/public/404.html',response, 'text/html', 404)
        break
    }


    console.log("responding to request")
})

server.listen(PORT, ()=> console.log(`server started on port http://localhost:${PORT}  press ctrl + c to stop` ))

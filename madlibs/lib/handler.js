//create a variable to store 
let eList = require('../data/emails.json')

//to write or create we need node's file system fs
const fs = require('fs')

//create functions
exports.newsletterSignup = (req,res) => {
    res.render('newsletter-signup', {csrf: 'supersercretcode'})
}



exports.newsletterSignupProcess = (req,res) => {
    console.log('req.body')
    console.log(req)
    //to store data
    //first create new user variable
    var newUser = {
        "firstname": req.body.firstname,
        "lastname": req.body.lastname,
        "address": req.body.address,
        "city": req.body.city,
        "state": req.body.state,
        "zip": req.body.zip,
        "email": req.body.email
    }

    console.log ("Cleaned user")
    console.log(newUser)

    eList.users.push(newUser)
    //we needa turn the elist values back to text in order to write
    var json = JSON.stringify(eList)

    fs.writeFileSync('./data/emails.json,',json,'utf8',()=>{
        console.log("finished writing file")
    })

    console.log("current eList")
    console.log(eList)
    //res.render('thankyou')
    res.redirect(303,'/thankyou')
}

exports.newsletterSignupList = (req,res)=>{
    console.log(eList)
    res.render('userspage',{"users": eList.users})
}

exports.newsletterUser = (req,res) => {
    var userDetails = eList.users.filter((user)=>{
        return user.email == req.params.email
    })
    res.render('userdetails',{"users":userDetails})
}

exports.newsletterUserDelete = (req,res) => {

    //var newUsers = {"users": []}
    
    newUsers.users = eList.users.filter((user)=>{
        return user.email != req.params.email
    })

    var json = JSON.stringify(newUsers)

    fs.writeFileSync('./data/emails.json,',json,'utf8',()=>{
        console.log("finished writing file")
    })

    res.send('<a href="/newsletter/list">Go Back</a>')
}

//exports functions
//exports.newsletterSignup = this.newsletterSignup
const firebase = require('firebase')
const express = require('express');
const app= express()
const path = require("path")
const bodyParser = require('body-parser')
const functions = require('firebase-functions');
const PORT = 8080
const notes=require('./routes/note')
app.set('view engine','ejs') 

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.render("mainPage")
})
app.get('/login',(req,res)=>{
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.render("login")
})
app.get('/tokens',(req,res)=>{
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.render("tokenPage")
})
app.get('/note',(req,res)=>{
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.render("notePage")
})
app.get('/blog',(req,res)=>{
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.render("blogPage")
})
app.get('/aboutus',(req,res)=>{
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.render("aboutUsPage")
})
app.use('/notes',notes)
// app.listen(PORT, ()=>{
//     console.log(`Server is listing on PORT: ${PORT}`);    
// })
app.use("/javascriptClient",express.static(path.join(__dirname,'javascriptClient')))
app.use("/javascript",express.static(path.join(__dirname,'javascript')))
app.use("/css",express.static(path.join(__dirname,'css')))
app.use("/images",express.static(__dirname + '/images'));
exports.app = functions.https.onRequest(app);
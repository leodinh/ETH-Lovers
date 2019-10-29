const firebase = require('firebase')
const express = require('express');
const app= express()
const path = require("path")
const bodyParser = require('body-parser')
const functions = require('firebase-functions');
const PORT = 8080
app.set('view engine','ejs') 
app.use(express.static(path.join(__dirname,'javascriptClient')))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/',(req,res)=>{
    res.setHeader('Content-Type','text/html; charset=utf-8')
    res.render("mainPage")
})
app.listen(PORT, ()=>{
    console.log(`Server is listing on PORT: ${PORT}`);    
})

// var firebaseConfig = {
//     apiKey: "AIzaSyDhoC6fIwWM_gHE7Z5zHn8cADTyCo62XzQ",
//     authDomain: "blockchain-news-cf255.firebaseapp.com",
//     databaseURL: "https://blockchain-news-cf255.firebaseio.com",
//     projectId: "blockchain-news-cf255",
//     storageBucket: "blockchain-news-cf255.appspot.com",
//     messagingSenderId: "154674766076",
//     appId: "1:154674766076:web:783a77f9c265e59a3fb779"
//   };
//   // Initialize Firebase
//  // firebase.initializeApp(firebaseConfig);
// const firebaseApp = firebase.initializeApp(firebaseConfig)
// function getFacts(){
//     console.log("hello");
    
//     const ref = firebaseApp.database().ref('/facts/');
//     console.log(ref);
    
//     return ref.once('value').then(snap =>snap.val()).catch((error)=>{
//         console.log(error);
        
//     })
// }
// app.get('/facts',(req,res)=>{
//     res.set('Cache-Control', 'public, max-age=300, s-maxage=600')
//     getFacts().then(facts=>{
//         console.log(facts);
//         res.send(facts)
//     })
   
// })
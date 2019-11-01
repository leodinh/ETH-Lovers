var express = require('express')
var router = express.Router()
const functions = require('firebase-functions');
const firebase = require('firebase')
var firebaseConfig = {
    apiKey: "AIzaSyDhoC6fIwWM_gHE7Z5zHn8cADTyCo62XzQ",
    authDomain: "blockchain-news-cf255.firebaseapp.com",
    databaseURL: "https://blockchain-news-cf255.firebaseio.com",
    projectId: "blockchain-news-cf255",
    storageBucket: "blockchain-news-cf255.appspot.com",
    messagingSenderId: "154674766076",
    appId: "1:154674766076:web:783a77f9c265e59a3fb779"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig)
router.post('/create', (req, res) => {
    let {
        note,
        user
    } = req.body;
    var referencePath = '/notes/' + user.substring(0, user.lastIndexOf("@")) + '/';
    var noteContent = firebaseApp.database().ref(referencePath);
    var newContent = noteContent.push() 
    var time= new Date().getTime()
    newContent.set({
                    Note: note,
                    Time: time
                },
                function (error) {
                    if (error) {
                        res.json({
                            result:'fail',
                            error:error
                        })
                    } else {
                        
                        res.json({
                            result:'success',
                            time: time,
                            id:newContent.key
                        })
                    }
                });
        }
)
router.get('/get',(req,res)=>{
    let {
        userEmail
    } = req.query;
    var referencePath = '/notes/' + userEmail.substring(0, userEmail.lastIndexOf("@")) + '/';
    console.log(referencePath);
    
    var noteContent = firebaseApp.database().ref(referencePath).orderByChild('Time');
    noteContent.on('value', function (data) {
        var noteArray=[]
        var noteIdArray=[]
        data.forEach(function(item){
            noteArray.push(item.val())
            noteIdArray.push(item.key)
        })
        res.json({
            result:"success",
            data: noteArray,
            id: noteIdArray
        })
    })
})
router.put('/update', function (req, res) {
    let {
        userEmail,
        content,
        noteId} = req.body;

    var referencePath = '/notes/' + userEmail.substring(0, userEmail.lastIndexOf("@")) + '/' + noteId + "/";
    var noteContent = firebase.database().ref(referencePath);
    noteContent.update({
            Note: content
        },
        function (error) {
            if (error) {
                res.json({
                    result:"fail",
                    error: error
                })
            } else {
                res.json({
                    result:"success",
                })
            }
        });
});
router.delete('/delete', function(req,res){
    let {
        userEmail,
        noteId} = req.body;

    var referencePath = '/notes/' + userEmail.substring(0, userEmail.lastIndexOf("@")) + '/' + noteId + "/";
    var noteContent = firebase.database().ref(referencePath);
    noteContent.remove(function(error){
        if (error) {
            res.send("Data could not be deleted." + error);
            res.json({
                result:"fail",
                error: error
            })
        } else {
            res.json({
                result:"success",
            })
        }
    });
})
module.exports = router
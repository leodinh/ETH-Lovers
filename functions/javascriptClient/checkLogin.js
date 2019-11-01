try {
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
    firebase.initializeApp(firebaseConfig);
    //const auth=firebase.auth();
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) { // if already logged in
            $("#login-btn span").text('Logout')
            $('#login-btn').click(function(){
                firebase.auth().signOut();
            })
            console.log(user.email);
            
            $('#login-btn').attr("href","")
            $('#take-note').show()
            $('#user-email').text(user.email)
        }
    });
} catch (error) {
    console.log(error);
    
}
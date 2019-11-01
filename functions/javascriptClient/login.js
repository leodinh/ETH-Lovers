try {
    // Your web app's Firebase configuration
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
    // firebase.auth().onAuthStateChanged(function (user) {
    //     if (user) { // if already logged in
    //         window.location.href="/"
    //     }
    // });

    /*******************\
     * init Login UI *
    \*******************/

    // FirebaseUI config.
    console.log(firebase.auth.EmailAuthProvider.PROVIDER_ID);

    var uiConfig = {
        'signInSuccessUrl': '/',
        'signInOptions': [
            // comment unused sign-in method
            // firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            // firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            //firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            //firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        'tosUrl': false,
    };

    // Initialize the FirebaseUI Widget using Firebase.
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', uiConfig);

    ////////////////////////////////////////

} catch (e) {
    console.error(e);
}
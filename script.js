const firebaseConfig = {
    apiKey: "AIzaSyAGw07WRLhba6YBJsCWkcgpTHb_OcS68uc",
    authDomain: "booking-appointment-c9cac.firebaseapp.com",
    projectId: "booking-appointment-c9cac",
    storageBucket: "booking-appointment-c9cac.appspot.com",
    messagingSenderId: "656898833070",
    appId: "1:656898833070:web:a38f21c2d2f2b7bbee8b3f",
    measurementId: "G-11ZEX6BH3V"
};

firebase.initializeApp(firebaseConfig);

function login(){
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        alert('Logged in successfully!');
      })
      .catch((error) => {
        alert(error.message);
      })
}
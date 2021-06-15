import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyAyMYkqqmtpKWKw98I0IgBq17vEh3dkfT8",
    authDomain: "submit-3fc43.firebaseapp.com",
    projectId: "submit-3fc43",
    storageBucket: "submit-3fc43.appspot.com",
    messagingSenderId: "33060421593",
    appId: "1:33060421593:web:e9ae82e27f778f0fffe3c8",
    measurementId: "G-GBN2930EDC"
  };
  var fireDB = firebase.initializeApp(firebaseConfig);

  export default fireDB.database().ref()
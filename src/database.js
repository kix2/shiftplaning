import firebase from 'firebase'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyA37hzm8LfM2T2qBzGOsIvYJdesa-4Wmxw",
    authDomain: "humantyproject.firebaseapp.com",
    databaseURL: "https://humantyproject.firebaseio.com",
    projectId: "humantyproject",
    storageBucket: "humantyproject.appspot.com",
    messagingSenderId: "993140650618"
};

firebase.initializeApp(config);

const database = firebase.database()

export default database
import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyBbs763g5boWRj8fHNTE5jQwKQyFhYFdvM",
    authDomain: "try-gallery.firebaseapp.com",
    projectId: "try-gallery",
    storageBucket: "try-gallery.appspot.com",
    messagingSenderId: "719988732684",
    appId: "1:719988732684:web:8d91f6e6894a2ec3e98f29"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFire = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFire, projectStorage, timestamp }
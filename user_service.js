const firebase = require("firebase/app");
require("firebase/auth");
const admin = require("firebase-admin");

var serviceAccount = require("./servicekey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fir-authentication-cff84.firebaseio.com"
});

const fb = firebase.initializeApp({
  apiKey: "AIzaSyD4ZmisuJLoxCMTnX--Ic7BICRQQbLaYmI",
  authDomain: "fir-authentication-cff84.firebaseapp.com",
  databaseURL: "https://fir-authentication-cff84.firebaseio.com",
  projectId: "fir-authentication-cff84",
  storageBucket: "fir-authentication-cff84.appspot.com",
  messagingSenderId: "458812335140",
  appId: "1:458812335140:web:926b1a2edb32017f0024b1",
  measurementId: "G-BHCTYLMWP0"
});


var db = admin.firestore();


exports.addUser = (email, password) =>
  fb.auth().createUserWithEmailAndPassword(email, password);

exports.additionalField = (async(uid, name, birthplace, age)=>{
 
  return await db.collection("users").doc(uid)
  .set({
    uid: uid,
    name: name,
    birthplace: birthplace,
    age:age
  })
      
});

exports.authenticate = (email, password) =>
  fb.auth().signInWithEmailAndPassword(email, password);

  exports.getfield = ((uid)=>{
    return  db.collection("users").doc(uid)
    .get({
      uid: uid
    })
        
  });

  exports.logout = () =>
  firebase.auth().signOut();

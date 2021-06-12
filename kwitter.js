// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDP7MPScYNZITsR9Kv1hLWJAiIntoMMHWE",
    authDomain: "kwitter-64ea2.firebaseapp.com",
    databaseURL: "https://kwitter-64ea2-default-rtdb.firebaseio.com",
    projectId: "kwitter-64ea2",
    storageBucket: "kwitter-64ea2.appspot.com",
    messagingSenderId: "492643810535",
    appId: "1:492643810535:web:9d6330c801611c6555b642"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){

 user_name = document.getElementById("user_name").value;
 localStorage.setItem("user_name",user_name);
 window.location="kwitter_room.html";
 firebase.database().ref("/").child(user_name).update({
    purpose:"addind username Name"
 });

}
//YOUR FIREBASE LINKS
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

    user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");
    

    firebase.initializeApp(firebaseConfig);
    function Send(){
      var msg;
     msg=document.getElementById("msg").value;
     firebase.database().ref(room_name).push({
       name:user_name,
       message:msg,
       like:0
     });
     document.getElementById("msg").value="";
  
  }
  

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) 
{ document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) 
{ childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
firebase_message_id = childKey;
message_data = childData;
//Start code

//End code
      } });  }); }
getData();

user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");

function LogOut(){


localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}


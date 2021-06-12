
//ADD YOUR FIREBASE LINKS HERE
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
 
   user_name=localStorage.getItem("user_name"); 
document.getElementById("user_name").innerHTML="Welcome "+  user_name+"!";
//addroom
function addRoom(){
 var room_name;
 room_name=document.getElementById("room_name").value; 
 firebase.database().ref("/").child(room_name).update({
   purpose:"addind Room Name"
 });
 localStorage.setItem("room_name",room_name);
 window.location="kwitter_page.html";
}

//Getdata
function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
{childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("roomname-"+Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirect_to_room_name(this.id)'>#"+Room_names+"</div> <hr>";
      document.getElementById("output").innerHTML+=row;

      //End code
      });});}
getData();

function redirect_to_room_name(name){
  console.log(name);
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html";

}


function LogOut(){


  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location="index.html";
  }
  
  

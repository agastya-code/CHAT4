//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAgQlcFSopTOxsNE5pgyEcpvaWYFwaYXHs",
    authDomain: "class-c6c0a.firebaseapp.com",
    projectId: "class-c6c0a",
    storageBucket: "class-c6c0a.appspot.com",
    messagingSenderId: "827930136030",
    appId: "1:827930136030:web:3f8527561977b13238614f"
  };

  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

       

//End code
    } });  }); }
getData();



function sent()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0    
    });
}

//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyA_Mo83Hbz-FM4xFCZ5o43QPLi0mJytbA4",
      authDomain: "twitter-6b994.firebaseapp.com",
      projectId: "twitter-6b994",
      databaseURL: "https://twitter-6b994-default-rtdb.firebaseio.com/",
      storageBucket: "twitter-6b994.appspot.com",
      messagingSenderId: "168560842203",
      appId: "1:168560842203:web:e422080245bd67bc9843fe",
      measurementId: "G-08E9R2R33V"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();

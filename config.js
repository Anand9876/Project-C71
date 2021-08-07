import firebase from 'firebase';
require("@firebase/firestore");
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyD0tmBsRQbGopzKaX3QZQnuu4tnwMMfogs",
  authDomain: "complaint-forum-4dce4.firebaseapp.com",
  projectId: "complaint-forum-4dce4",
  storageBucket: "complaint-forum-4dce4.appspot.com",
  messagingSenderId: "1038390291398",
  appId: "1:1038390291398:web:4aa0f7bb2d93eafd7ae0c7"
};
if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

  export default firebase.firestore()


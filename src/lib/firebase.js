import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBslJ3FoCNfoA60N1RPfTCswlyVApoAzpY",
  authDomain: "instagram-yt-25580.firebaseapp.com",
  projectId: "instagram-yt-25580",
  storageBucket: "instagram-yt-25580.appspot.com",
  messagingSenderId: "75834902774",
  appId: "1:75834902774:web:09c3927fd193f2712d04d7",
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

export { firebase, FieldValue };

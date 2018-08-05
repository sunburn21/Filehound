import * as firebase from "firebase";
var config = {
  apiKey: "AIzaSyBxylCC403KHXOWN6X-kxvkcrSoQKUnv0c",
  authDomain: "filehound-4f65d.firebaseapp.com",
  databaseURL: "https://filehound-4f65d.firebaseio.com",
  projectId: "filehound-4f65d",
  storageBucket: "filehound-4f65d.appspot.com",
  messagingSenderId: "76707463575"
};
firebase.initializeApp(config);
const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

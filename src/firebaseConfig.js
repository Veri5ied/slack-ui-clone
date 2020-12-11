import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyARiLsrFaT3VqoLp1eOHwuJ4w1iblBMBDQ",
  authDomain: "slack-web-app-a719e.firebaseapp.com",
  projectId: "slack-web-app-a719e",
  storageBucket: "slack-web-app-a719e.appspot.com",
  messagingSenderId: "90900856430",
  appId: "1:90900856430:web:eaadfc4c8a2e8fb033f07f",
  measurementId: "G-S8G2YR2NWP"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const googleAuth = new firebase.auth.GoogleAuthProvider();

export { auth, googleAuth };
export default db;
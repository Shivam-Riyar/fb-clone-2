import firebase from './firebase'


const firebaseConfig = {
  apiKey: "AIzaSyCOCTnXq1dZ4TE3GlTlEErmqCWmgokxlmk",
  authDomain: "fb-clone-5cbdb.firebaseapp.com",
  projectId: "fb-clone-5cbdb",
  storageBucket: "fb-clone-5cbdb.appspot.com",
  messagingSenderId: "325974025195",
  appId: "1:325974025195:web:e5c55549820a5c908dafae",
  measurementId: "G-HKHTBNF4LH"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db




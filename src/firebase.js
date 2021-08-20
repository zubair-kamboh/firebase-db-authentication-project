import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyAY7ID2a6dKjMshrfPFzDNouuuBKt6Z7Lg',
  authDomain: 'linkedin-clone-cc8cb.firebaseapp.com',
  projectId: 'linkedin-clone-cc8cb',
  storageBucket: 'linkedin-clone-cc8cb.appspot.com',
  messagingSenderId: '790704345875',
  appId: '1:790704345875:web:fffa69e1e62690774100e6',
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export { db, auth }

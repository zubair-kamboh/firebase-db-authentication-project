import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// Initialize Firebase
const app = initializeApp({
  apiKey: 'AIzaSyAY7ID2a6dKjMshrfPFzDNouuuBKt6Z7Lg',
  authDomain: 'linkedin-clone-cc8cb.firebaseapp.com',
  projectId: 'linkedin-clone-cc8cb',
  storageBucket: 'linkedin-clone-cc8cb.appspot.com',
  messagingSenderId: '790704345875',
  appId: '1:790704345875:web:fffa69e1e62690774100e6',
})

const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth }

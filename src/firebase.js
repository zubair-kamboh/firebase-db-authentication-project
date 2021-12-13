import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// Initialize Firebase
const firebaseApp = initializeApp({
  apiKey: 'AIzaSyAY7ID2a6dKjMshrfPFzDNouuuBKt6Z7Lg',
  authDomain: 'linkedin-clone-cc8cb.firebaseapp.com',
  projectId: 'linkedin-clone-cc8cb',
  storageBucket: 'linkedin-clone-cc8cb.appspot.com',
  messagingSenderId: '790704345875',
  appId: '1:790704345875:web:fffa69e1e62690774100e6',
})

// db & auth
const db = getFirestore(firebaseApp)
const auth = getAuth()

export { db, auth }

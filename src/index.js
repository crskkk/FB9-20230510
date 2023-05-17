const h1 = document.createElement('h1')
h1.textContent = 'Bye Stupid 😽!'
document.body.appendChild(h1)

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
//import { getAnalytics } from 'firebase/analytics'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection, getDocs } from 'firebase/firestore'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCpvaglKdtUCUIlWDF5b7T3DjKF9ndgHsA',
  authDomain: 'fb9-20230510.firebaseapp.com',
  projectId: 'fb9-20230510',
  storageBucket: 'fb9-20230510.appspot.com',
  messagingSenderId: '1040493303146',
  appId: '1:1040493303146:web:0091fcea695e1417430113',
  measurementId: 'G-G2WHLQJ49P'
}

// Initialize Firebase
initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)

// Firestore Database: Initialize the service, access a Collection's data
const db = getFirestore()
const colRef = collection(db, 'people')
getDocs(colRef)
    .then((snapshot) => {
        let people = []
        snapshot.docs.forEach((doc) => {
            people.push({ ...doc.data(), id: doc.id })
        })
        console.log(people)
    })

// About to do some CRUD… Well some CD anyway
//
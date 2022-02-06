import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC_v2tdcAj81l-3wTCoqHKlh5mrdg_JCdg",
    authDomain: "ecommerce-ff77c.firebaseapp.com",
    projectId: "ecommerce-ff77c",
    storageBucket: "ecommerce-ff77c.appspot.com",
    messagingSenderId: "742819912004",
    appId: "1:742819912004:web:af0966fb87b09c3fc41f11"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export (allow us to use login & register and to use google login as well)
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
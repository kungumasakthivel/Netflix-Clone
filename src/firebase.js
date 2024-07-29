// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword, 
    signOut
} from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXRkGgTTApDvJA9vZ5Rk_H32FNOl4ntY8",
  authDomain: "netflix-clone-sakthivel.firebaseapp.com",
  projectId: "netflix-clone-sakthivel",
  storageBucket: "netflix-clone-sakthivel.appspot.com",
  messagingSenderId: "145675755115",
  appId: "1:145675755115:web:272a9a3dc904b5ffa0db2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)

const signup = async(name, email, password) => {
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password); // user created in firebase
        const user = res.user; 
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email 
        })
    }catch(e){
        console.log(e);
        alert(e);
    }
}

const login = async(email, password) => {
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }catch(e){
        console.log(e);
        alert(e);
    }
}

const logout = () => {
    signOut(auth)
}

export {auth, db, login, signup, logout};
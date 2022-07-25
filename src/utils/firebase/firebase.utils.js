import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup, 
    // GithubAuthProvider, 
    GoogleAuthProvider,
    // FacebookAuthProvider,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyBskgFaxszk3UTB5esJaml8bfObZXDuK5s",
  authDomain: "practie-project-ug.firebaseapp.com",
  projectId: "practie-project-ug",
  storageBucket: "practie-project-ug.appspot.com",
  messagingSenderId: "1019798277907",
  appId: "1:1019798277907:web:55e86ac9ba950f5a5494e6"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);
  console.log(userSnapshot);

  if(!userSnapshot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt
      })
    }catch (error) {
      console.log('error creating the user', error.message)
    }
  }

  return userDocRef;
}
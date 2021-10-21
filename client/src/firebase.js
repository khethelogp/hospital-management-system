import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const app = initializeApp({
    apiKey: "AIzaSyAsIIcjQuDMnyl8-S8YAoUuX3Mit_wwHK4",
    authDomain: "hospital-system-d2696.firebaseapp.com",
    projectId: "hospital-system-d2696",
    storageBucket: "hospital-system-d2696.appspot.com",
    messagingSenderId: "518280124200",
    appId: "1:518280124200:web:bb028cb9ca364fbcfde21d"
});


export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
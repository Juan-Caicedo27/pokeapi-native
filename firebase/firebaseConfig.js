import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
apiKey: "AIzaSyCkeQFspq-LdgCMyCSazee-KfFFykQfq_s",
authDomain: "pokeapi-c055d.firebaseapp.com",
projectId: "pokeapi-c055d",
storageBucket: "pokeapi-c055d.firebasestorage.app",
messagingSenderId: "516859003675",
appId: "1:516859003675:web:fafaee27dbebc35931c9be"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db };
import {initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore";

const firebaseConfig ={
    
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

module.exports = db;


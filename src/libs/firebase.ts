import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAY94Rq3jwvU28n1kVyMAiMUd4Hf7ampCU",
  authDomain: "netflix-d88b8.firebaseapp.com",
  projectId: "netflix-d88b8",
  storageBucket: "netflix-d88b8.appspot.com",
  messagingSenderId: "476988793052",
  appId: "1:476988793052:web:6022f0f160a9b532921419"
};

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp); 

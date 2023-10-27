import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyD6WkoIM1TOT4rCjg6486-Kd5qpNmYG05E',
	authDomain: 'react-linktree-dd9c6.firebaseapp.com',
	projectId: 'react-linktree-dd9c6',
	storageBucket: 'react-linktree-dd9c6.appspot.com',
	messagingSenderId: '232081783827',
	appId: '1:232081783827:web:740027821b0d8a9e0453e6'
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };

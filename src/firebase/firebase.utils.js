import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAusWPwqpG9-SwR2imaYR7z5r64FMdrUhg',
	authDomain: 'crown-db-3ad74.firebaseapp.com',
	databaseURL: 'https://crown-db-3ad74.firebaseio.com',
	projectId: 'crown-db-3ad74',
	storageBucket: 'crown-db-3ad74.appspot.com',
	messagingSenderId: '766048730037',
	appId: '1:766048730037:web:f7ac2602e8f251f591f7fc',
	measurementId: 'G-QCJT5LX25B',
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) {
		return;
	}
	const userRef = firestore.doc(`users/${userAuth.uid}`);
	const snapShot = await userRef.get();
	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

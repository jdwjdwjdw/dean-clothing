import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD-U_gy4G2I1aR-Rvs4Q3qjkl0pQvF42AM',
	authDomain: 'dean-clothing-db.firebaseapp.com',
	databaseURL: 'https://dean-clothing-db.firebaseio.com',
	projectId: 'dean-clothing-db',
	storageBucket: 'dean-clothing-db.appspot.com',
	messagingSenderId: '822140920306',
	appId: '1:822140920306:web:8faba08db0295a99460b6b',
	measurementId: 'G-6SDD0S4835'
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

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
				...additionalData
			});
		} catch (error) {
			console.log('error creating user', error.message);
		}
	}

	return userRef;
};

export const addCollectionAndDocuments = (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	console.log(collectionRef);
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

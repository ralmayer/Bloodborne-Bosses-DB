import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: 
    authDomain: 
    databaseURL: 
    projectId:
    storageBucket: 
    messagingSenderId: 
    appId: 
    measurementId: 
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
        this.db = app.firestore()
        // this.auth.onAuthStateChanged(cred => cred ? console.log(cred) : console.log('aw fuck'))
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout() {
        return this.auth.signOut()
    }

    register(name, email, password) {
        this.auth.createUserWithEmailAndPassword(email, password)
        .then(cred => this.db.collection('users').doc(cred.user.uid).set({
            name: name
        }))

    }

    isInitialized() {
		return new Promise(resolve => {
			this.auth.onAuthStateChanged(resolve)
		})
    }

    getCurrentUser() {
        return this.auth.currentUser
    }
    
    addComment(collectionName, posterID, content) {
        return this.db.collection(collectionName).add({
            posterID: posterID,
            content: content,
            timestamp: new Date().toISOString()       
        })
    }

    getData(collectionName) {
        return this.db.collection(collectionName)
    }

    updateProfile(userID, name, avatar) {
        return this.db.collection('users').doc(userID).update({
            name: name,
            avatar: avatar
        })
    }
}
export default new Firebase()

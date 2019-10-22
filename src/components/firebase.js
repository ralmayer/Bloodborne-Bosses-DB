import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/firebase-firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBKsW2MNHtfmjU-Gk_euDPQJIBEaI-yqV8",
    authDomain: "bloodbornedb.firebaseapp.com",
    databaseURL: "https://bloodbornedb.firebaseio.com",
    projectId: "bloodbornedb",
    storageBucket: "bloodbornedb.appspot.com",
    messagingSenderId: "1060896385450",
    appId: "1:1060896385450:web:e96c9491c9a3ca196ba3d3",
    measurementId: "G-NYR6LS4V95"
};

class Firebase {
    constructor() {
        app.initializeApp(firebaseConfig)
        this.auth = app.auth()
        this.db = app.firestore()
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password)
    }

    logout() {
        return this.auth.signOut()
    }

    async register(name, email, password) {
        await this.auth.createUserWithEmailAndPassword(email, password)
        return this.auth.currentUser.updateProfile({
            displayName: name
        })
    }
}
export default new Firebase()
import app from 'firebase/app';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA2d5CXtrr6B_2pJ7uBZkmf1a-e7lMbo8U',
  authDomain: 'checkpoint4-9d4fc.firebaseapp.com',
  projectId: 'checkpoint4-9d4fc',
  storageBucket: 'checkpoint4-9d4fc.appspot.com',
  messagingSenderId: '895626999492',
  appId: '1:895626999492:web:28577dda3a3e746f56bb91',
};

class Firebase {
  constructor() {
    app.initializeApp(config);
    this.auth = app.auth;
  }

  // inscription
  signupUser = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  // connexion
  loginUser = (email, password) =>
    this.auth.singInWithEmailAndPassword(email, password);

  // deconnexion
  signoutUser = (email, password) => this.auth.signOut();
}

export default Firebase;

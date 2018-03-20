import firebase from 'firebase';
import settings from './config/settings'

module.exports = {
    /**
     * Initialize Firebase
     */
    init: function() {
        firebase.initializeApp(settings);
    },
    /**
     * Sign in user
     * @param email
     * @param password
     * @param callback
     */
    login: function(email, password, callback) {
        firebase.auth().signInWithEmailAndPassword(email, password)
          .then((user) => {
            callback(true, user);
          })
          .catch((error) => {
            callback(false, error)
          });
    }
};

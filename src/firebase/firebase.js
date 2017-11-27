import * as firebase from 'firebase';
import expenses from '../tests/fixtures/expenses';

const config = {
    apiKey: "AIzaSyDMobxKhGXYOnODCw9VRpXGF_Ocft9-9aQ",
    authDomain: "expensify-7a895.firebaseapp.com",
    databaseURL: "https://expensify-7a895.firebaseio.com",
    projectId: "expensify-7a895",
    storageBucket: "expensify-7a895.appspot.com",
    messagingSenderId: "553669262786"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };
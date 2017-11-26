import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDMobxKhGXYOnODCw9VRpXGF_Ocft9-9aQ",
    authDomain: "expensify-7a895.firebaseapp.com",
    databaseURL: "https://expensify-7a895.firebaseio.com",
    projectId: "expensify-7a895",
    storageBucket: "expensify-7a895.appspot.com",
    messagingSenderId: "553669262786"
};

firebase.initializeApp(config);

const database = firebase.database()
// ref by default is the root of the database.
database.ref().set({
    name: 'Alistair Mackay',
    age: 29,
    isMarried: true,
    location: {
        city: 'Edinburgh',
        country: 'Scotland'
    },
    attributes: {
        height: 1.78,
        weight: 95
    }
});

// This happens asynch.
database.ref('age').set(30)
database.ref('location/city').set('Aberdeen');
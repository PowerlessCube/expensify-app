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
// https://firebase.google.com/docs/reference/js/firebase.database.Reference#set => docs for set()
database.ref().set({
    name: 'Alistair Mackay',
    age: 29,
    isMarried: true,
    location: {
        city: 'Edinburgh',
        country: 'Scotland'
    },
}).then(() => {
    console.log('Data got saved');
}).catch((e) => {
    console.log('this failed', e);
});;

// Challenge
// setup then and catch
// makesure catch actually works
// switch rules to be open
// make sure that then runs.

database.ref('attributes').set({
    height: 178,
    weight: 95
}).then(() => {
    console.log('Data has changed!');
}).catch(() => {
    console.log('Something done goofed!');
});
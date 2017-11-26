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

const database = firebase.database();
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
});

database.ref('isMarried').set(null);

// database.ref('isMarried')
//     .remove()
//     .then(() => {
//         console.log('Data removed successfully');
//     })
//     .catch((e) => {
//         console.log('Remove Data done goofed! ', e);
//     })

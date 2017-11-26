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
    stressLevel: 6,
    job: {
        title: 'junior software developer',
        company: 'Escrivo'
    },
    location: {
        city: 'Edinburgh',
        country: 'Scotland'
    },
}).then(() => {
    console.log('Data got saved');
}).catch((e) => {
    console.log('this failed', e);
});

// Change the stressLevel to a 9
// Change job to Amazon
// Change location .city to Seattle
database.ref().update({
    stressLevel: 9,
    'location/city': 'Seattle',
    'job/company': 'Amazon'
})

// database.ref('isMarried')
//     .remove()
//     .then(() => {
//         console.log('Data removed successfully');
//     })
//     .catch((e) => {
//         console.log('Remove Data done goofed! ', e);
//     })

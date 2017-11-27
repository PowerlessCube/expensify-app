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

// Setup subscription -> Alistair is a software dev at Amazon.
const onValueChange = database.ref().on('value', (snapshot) => {
    const { name, job: {title}, job: {company} } = snapshot.val();
    console.log(`${name} is a ${title} at ${company}`);
}, (e) => {
    console.log('Error with data fetching, ', e);
});

// Change the data and makre sure ir reprints.

// database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val()
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('Error', e)
//     });

// database.ref().set({
//     name: 'Alistair Mackay',
//     age: 29,
//     stressLevel: 6,
//     job: {
//         title: 'junior software developer',
//         company: 'Escrivo'
//     },
//     location: {
//         city: 'Edinburgh',
//         country: 'Scotland'
//     },
// }).then(() => {
//     console.log('Data got saved');
// }).catch((e) => {
//     console.log('this failed', e);
// });

// database.ref().update({
//     stressLevel: 9,
//     'location/city': 'Seattle',
//     'job/company': 'Amazon'
// })

// database.ref('isMarried')
//     .remove()
//     .then(() => {
//         console.log('Data removed successfully');
//     })
//     .catch((e) => {
//         console.log('Remove Data done goofed! ', e);
//     })

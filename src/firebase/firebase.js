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

expenses.map((expense) => {
    const { description, note, amount, createdAt } = expense
    database.ref('expenses').push({
        description,
        note,
        amount,
        createdAt
    })
})

// Setup 'Expenses' with items {description, note, amount, createdAt}

// database.ref('notes/-Kzush49hylpC5tFLB4F').remove()

// how to add 
// database.ref('notes').push({
//     title: 'Course topics',
//     body: 'React stuff and firebase'
// })

/*
// The difference between arrays in firebase and the real world
const firebaseNotes = {
    notes: {
        id2314ad: {
            title: 'First Note',
            body: 'This is my note'
        },
        id2343ad: {
            title: 'Second Note',
            body: 'This is second my note'
        }
    }
}

const notes = [{
    id: '12',
    title: 'First Note',
    body: 'This is my note'
}, {
    id: '34asd',
    title: 'Second Note',
    body: 'This is my other note'
}]

database.ref('notes').set(firebaseNotes)
*/

// Setup subscription -> Alistair is a software dev at Amazon.
// const onValueChange = database.ref().on('value', (snapshot) => {
//     const { name, job: {title} = 'unkown', job: {company} = 'unknown' } = snapshot.val();
//     console.log(`${name} is a ${title} at ${company}`);
// }, (e) => {
//     console.log('Error with data fetching, ', e);
// });


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

// const person = {
//     name: 'Alistair',
//     age: 29,
//     location: {
//         city: 'Edinburgh',
//         temp: 11
//     }
// };
// // Simple object destructing

// // Default value
// const { name: firstName = 'Anonymous', age } = person;
// // const name = person.name;
// // const age = person.age;

// console.log(`${firstName} is ${age}.`);
// // console.log(`${person.name} is ${person.age}.`);

// // Re-naming varibales
// const {city, temp: temperature} = person.location;

// if (city && temperature) {
//     console.log(`it's ${temperature} deg in ${city}.`);
// }

const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

//Challenge - use destructuring to cl the below.
const {name: publisherName = 'Self-published'} = book.publisher

console.log(publisherName); // Penguin default = self-published
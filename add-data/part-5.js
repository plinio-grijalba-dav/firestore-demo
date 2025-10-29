import {db} from '../db/index.js';

// generar un id de firestore y usarlo para crear un documento
const newDocRef = db.collection('users').doc();
await newDocRef.set({
  first: 'Grace',
  last: 'Hopper',
  born: 1906
});
console.log('Added document with ID: ', newDocRef.id);



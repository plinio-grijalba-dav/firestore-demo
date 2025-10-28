import { FieldValue } from '@google-cloud/firestore';
import {db} from '../db/index.js';

// referencia a un documento
const docRef = db.collection('users').doc('Frank');

const initialData = {
  name: 'Frank',
  age: 12,
  favorites: {
    food: 'Pizza',
    color: 'Blue',
    subject: 'recess'
  },
  likes: ['soccer', 'puzzles', 'reading']
};

// para crear o sobrescribir un documento usamos set()
await docRef.set(initialData);

// Incrementar un valor numérico usando FieldValue.increment
await docRef.update({
  age: FieldValue.increment(1),
});

// Decrementar un valor numérico usando FieldValue.increment
// await docRef.update({
//   age: FieldValue.increment(-1),
// });

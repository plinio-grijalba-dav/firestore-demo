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
  }
};

// para crear o sobrescribir un documento usamos set()
await docRef.set(initialData);

// Actualizar un documento existente usando update()
await docRef.update({
  age: 13,
  'favorites.color': 'Red'
});
import {db} from '../db/index.js';

// referencia a un documento
const docRef = db.collection('users').doc('aturing');

// para crear o sobrescribir un documento usamos set()
await docRef.set({
  first: 'Alan',
  last: 'Turing',
  born: 1912
});

// Sobrescribir un documento existente sin merge (elimina los campos no especificados)
await docRef.set({
  first: 'Alan',
  born: 1912
});
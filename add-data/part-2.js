import {db} from '../db/index.js';

// referencia a un documento
const docRef = db.collection('users').doc('alovelace');

// para crear o sobrescribir un documento usamos set()
await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

// sobrescribir un documento existente (parcialmente) usando merge
await docRef.set({
  last: 'Lovelace',
}, { merge: true });
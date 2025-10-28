import {db} from '../db/index.js';

// referencia a un documento
const docRef = db.collection('users').doc('alovelace');

// Actualizar un documento existente usando update()
await docRef.update({
  born: 1816,
  occupation: 'mathematician'
});
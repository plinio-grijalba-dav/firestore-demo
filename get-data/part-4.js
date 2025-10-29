import {db} from '../db/index.js';

// Obtener todos los documentos de una colección
const citiesRef = db.collection('cities');
const snapshot = await citiesRef.get();
snapshot.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});
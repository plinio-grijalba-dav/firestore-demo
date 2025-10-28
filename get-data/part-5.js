import {db} from '../db/index.js';

// Listar todas las subcolecciones de un documento
const sfRef = db.collection('cities').doc('SF');
const collections = await sfRef.listCollections();
collections.forEach(collection => {
  console.log('Found subcollection with id:', collection.id);
});
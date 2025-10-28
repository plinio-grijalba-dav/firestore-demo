import {db} from '../db/index.js';

const collectionRef = db.collection('cities');
// Agregación de conteo
const snapshot = await collectionRef.count().get();
console.log(snapshot.data().count);

// Agregación de conteo con filtro
const query = collectionRef.where('state', '==', 'CA');
const snapshotFilter = await query.count().get();
console.log(snapshotFilter.data().count);

import {db} from '../db/index.js';

// Consulta con startAt
const startAtRes = await db.collection('cities')
  .orderBy('population')
  .startAt(1000000)
  .get();

startAtRes.forEach(doc => {
  console.log(doc.id, ' => ', doc.data());
});

console.log('-------------------');
// Consulta con endAt
const endAtRes = await db.collection('cities')
  .orderBy('population')
  .endAt(1000000)
  .get();

endAtRes.forEach(doc => {
  console.log(doc.id, ' => ', doc.data());
});
import {db} from '../db/index.js';

// Will return all Springfields
const startAtNameRes = await db.collection('cities')
  .orderBy('name')
  .orderBy('state')
  .startAt('Springfield')
  .get();

startAtNameRes.forEach(doc => {
  console.log(doc.id, ' => ', doc.data());
});

console.log('-------------------');

// Will return 'Springfield, Missouri' and 'Springfield, Wisconsin'
const startAtNameAndStateRes = await db.collection('cities')
  .orderBy('name')
  .orderBy('state')
  .startAt('Springfield', 'Missouri')
  .get();

startAtNameAndStateRes.forEach(doc => {
  console.log(doc.id, ' => ', doc.data());
});
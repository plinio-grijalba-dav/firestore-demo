import {db} from '../db/index.js';

const docRef = db.collection('cities').doc('SF');
const snapshot = await docRef.get();
const startAtSnapshot = db.collection('cities')
  .orderBy('population')
  .startAt(snapshot);

const startAtRes = await startAtSnapshot.limit(10).get();

startAtRes.forEach(doc => {
  console.log(doc.id, ' => ', doc.data());
});
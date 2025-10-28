import {db} from '../db/index.js';

const first = db.collection('cities')
  .orderBy('population')
  .limit(3);

const snapshot = await first.get();

// Get the last document
const last = snapshot.docs[snapshot.docs.length - 1];

// Construct a new query starting at this document.
// Note: this will not have the desired effect if multiple
// cities have the exact same population value.
const next = db.collection('cities')
  .orderBy('population')
  .startAfter(last.data().population)
  .limit(3);

// Use the query for pagination
const nextSnapshot = await next.get();
nextSnapshot.forEach(doc => {
  console.log(doc.id, ' => ', doc.data());
});
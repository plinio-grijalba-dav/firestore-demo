import {db} from '../db/index.js';

const citiesRef = db.collection('cities');

await citiesRef.doc('SF').collection('landmarks').doc().set({
  name: 'Golden Gate Bridge',
  type: 'bridge'
});
await citiesRef.doc('SF').collection('landmarks').doc().set({
  name: 'Legion of Honor',
  type: 'museum'
});
await citiesRef.doc('LA').collection('landmarks').doc().set({
  name: 'Griffith Park',
  type: 'park'
});
await citiesRef.doc('LA').collection('landmarks').doc().set({
  name: 'The Getty',
  type: 'museum'
});
await citiesRef.doc('DC').collection('landmarks').doc().set({
  name: 'Lincoln Memorial',
  type: 'memorial'
});
await citiesRef.doc('DC').collection('landmarks').doc().set({
  name: 'National Air and Space Museum',
  type: 'museum'
});
await citiesRef.doc('TOK').collection('landmarks').doc().set({
  name: 'Ueno Park',
  type: 'park'
});
await citiesRef.doc('TOK').collection('landmarks').doc().set({
  name: 'National Museum of Nature and Science',
  type: 'museum'
});
await citiesRef.doc('BJ').collection('landmarks').doc().set({
  name: 'Jingshan Park',
  type: 'park'
});
await citiesRef.doc('BJ').collection('landmarks').doc().set({ 
  name: 'Beijing Ancient Observatory',
  type: 'museum'
});

// Consulta 
const collectionGroup = await db.collectionGroup('landmarks');
const querySnapshot = await collectionGroup.where('type', '==', 'museum').get();
querySnapshot.forEach((doc) => {
  console.log(doc.id, ' => ', doc.data());
});
import { Filter } from '@google-cloud/firestore';
import {db} from '../db/index.js';

const citiesRef = db.collection('cities');

// Consultas (AND) compuestas
const denverRef = citiesRef.where('state', '==', 'CO').where('name', '==', 'Denver');
denverRef.get().then(snapshot => {
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
});

const smallCitiesInCA = citiesRef.where('state', '==', 'CA').where('population', '<', 1000000);
smallCitiesInCA.get().then(snapshot => {
  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
});

// OR consultas
const bigCities = await citiesRef
  .where(
    Filter.or(
      Filter.where('capital', '==', true),
      Filter.where('population', '>=', 1000000)
    )
  )
  .get();
bigCities.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});


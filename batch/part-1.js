import {db} from '../db/index.js';

// Get a new write batch
const batch = db.batch();

// Set the value of 'NYC'
const nycRef = db.collection('cities').doc('NYC');
batch.set(nycRef, {name: 'New York City'});

// Update the population of 'SF'
const sfRef = db.collection('cities').doc('SF');
batch.update(sfRef, {population: 1000000});

// Delete the city 'LA'
const laRef = db.collection('cities').doc('LA');
batch.delete(laRef);

// Commit the batch
await batch.commit();
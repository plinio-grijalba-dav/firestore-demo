import { AggregateField } from 'firebase-admin/firestore';
import {db} from '../db/index.js';

const coll = db.collection('cities');

const aggregateQuery = coll.aggregate({
    countOfDocs: AggregateField.count(),
    totalPopulation: AggregateField.sum('population'),
    averagePopulation: AggregateField.average('population')
  });

const snapshot = await aggregateQuery.get();
console.log('countOfDocs: ', snapshot.data().countOfDocs);
console.log('totalPopulation: ', snapshot.data().totalPopulation);
console.log('averagePopulation: ', snapshot.data().averagePopulation);
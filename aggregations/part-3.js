import { AggregateField } from 'firebase-admin/firestore';
import {db} from '../db/index.js';

const coll = db.collection('cities');
// Agregación de promedio
const averageAggregateQuery = coll.aggregate({
        averagePopulation: AggregateField.average('population'),
      });

const snapshot = await averageAggregateQuery.get();
console.log('averagePopulation: ', snapshot.data().averagePopulation);

// Agregación de promedio con filtro
const q = coll.where("capital", "==", true);
const averageAggregateQueryCitiesFilter = q.aggregate({
        averagePopulation: AggregateField.average('population'),
      });

const snapshotCitiesFilter = await averageAggregateQueryCitiesFilter.get();
console.log('averagePopulation: ', snapshotCitiesFilter.data().averagePopulation);
import { AggregateField } from 'firebase-admin/firestore';
import {db} from '../db/index.js';

const coll = db.collection('cities');
// Agregación de suma
const sumAggregateQuery = coll.aggregate({
         totalPopulation: AggregateField.sum('population'),
       });

const snapshot = await sumAggregateQuery.get();
console.log('totalPopulation: ', snapshot.data().totalPopulation);

// Agregación de suma con filtro 
const collCities = db.collection('cities');
const q = collCities.where("capital", "==", true);
const sumAggregateQueryCitiesFilter = q.aggregate({
        totalPopulation: AggregateField.sum('population'),
      });

const snapshotCitiesFilter = await sumAggregateQueryCitiesFilter.get();
console.log('totalPopulation: ', snapshotCitiesFilter.data().totalPopulation);

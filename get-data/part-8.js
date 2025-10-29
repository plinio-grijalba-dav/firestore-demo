import {db} from '../db/index.js';

const citiesRef = db.collection('cities');

await citiesRef.doc('SF').set({
  name: 'San Francisco', state: 'CA', country: 'USA',
  capital: false, population: 860000,
  regions: ['west_coast', 'norcal']
});
await citiesRef.doc('LA').set({
  name: 'Los Angeles', state: 'CA', country: 'USA',
  capital: false, population: 3900000,
  regions: ['west_coast', 'socal']
});
await citiesRef.doc('DC').set({
  name: 'Washington, D.C.', state: null, country: 'USA',
  capital: true, population: 680000,
  regions: ['east_coast']
});
await citiesRef.doc('TOK').set({
  name: 'Tokyo', state: null, country: 'Japan',
  capital: true, population: 9000000,
  regions: ['kanto', 'honshu']
});
await citiesRef.doc('BJ').set({
  name: 'Beijing', state: null, country: 'China',
  capital: true, population: 21500000,
  regions: ['jingjinji', 'hebei']
});

/*
  Operadores de consultas
  El método where() usa tres parámetros: un campo para filtrar, un operador de comparación y un valor. Firestore admite los siguientes operadores de comparación:

  < menor que
  <= menor o igual que
  == igual que
  > mayor que
  >= mayor que o igual que
  != no igual a
  array-contains
  array-contains-any
  in
  not-in
*/

console.log('Ciudades en CA:');
const stateQueryRes = await citiesRef.where('state', '==', 'CA').get();
stateQueryRes.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});

console.log('Ciudades con población menor a 1,000,000:');
const populationQueryRes = await citiesRef.where('population', '<', 1000000).get();
populationQueryRes.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});

console.log('Ciudades con nombre mayor o igual a "San Francisco":');
const nameQueryRes = await citiesRef.where('name', '>=', 'San Francisco').get();
nameQueryRes.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});


console.log('Ciudades que no son capitales:');
const notCapitalQueryRes = await citiesRef.where('capital', '==', false).get();
notCapitalQueryRes.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});

console.log('Ciudades en la costa oeste:');
const westCoastCities = await citiesRef.where('regions', 'array-contains',
  'west_coast').get();
westCoastCities.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});

console.log('Ciudades en USA o Japón:');
const countriesQueryRes = await citiesRef.where('country', 'in',
  ['USA', 'Japan']).get();
countriesQueryRes.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});

console.log('Ciudades que no están en CA ni en Japón:');
const notInQueryRes = await citiesRef.where('country', 'not-in',
  ['CA', 'Japan']).get();
notInQueryRes.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});

console.log('Ciudades en la costa oeste o este:');
const coastalCities = await citiesRef.where('regions', 'array-contains-any',
    ['west_coast', 'east_coast']).get();
coastalCities.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});

console.log('Ciudades en exactamente una de las costas:');
const exactlyOneCoast = await citiesRef.where('regions', 'in',
    [['west_coast', 'east_coast']]).get();
exactlyOneCoast.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});

/*
Ten en cuenta las siguientes limitaciones de in, not-in y array-contains-any:

Firestore proporciona compatibilidad con las consultas OR lógicas a través de los operadores or, in y array-contains-any. Estas consultas se limitan a 30 disyunciones según su formato disyuntivo normal. Este límite es fijo y no se puede ajustar.
Puedes usar como máximo una cláusula array-contains por disyunción (grupo or). No puedes combinar array-contains con array-contains-any en la misma disyunción.
No puedes combinar not-in con no es igual a !=.
not-in admite hasta 10 valores de comparación.
*/



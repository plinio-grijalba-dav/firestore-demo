import {db} from '../db/index.js';


const citiesRef = db.collection('cities');
console.log('------1------');
//  consulta que te muestre las primeras 3 ciudades en orden alfabético 
const firstThreeRes = await citiesRef.orderBy('name').limit(3).get();
firstThreeRes.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});

console.log('------2------');
// consulta que te muestre las últimas 3 ciudades en orden alfabético
const lastThreeRes = await citiesRef.orderBy('name', 'desc').limit(3).get();
lastThreeRes.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});

console.log('------3------');
// ordenar por estado y, dentro de cada estado, por población de manera descendente
const byStateByPopRes = await citiesRef.orderBy('state').orderBy('population', 'desc').get();
byStateByPopRes.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});

console.log('------4------');
// consulta que te muestre las 2 ciudades más grandes (por población) con más de 2.5 millones de habitantes
const biggestRes = await citiesRef.where('population', '>', 2500000)
  .orderBy('population').limit(2).get();
biggestRes.forEach(doc => {
  console.log(doc.id, '=>', doc.data());
});
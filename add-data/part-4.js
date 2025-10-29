import {db} from '../db/index.js';

// crear otro documento con un ID generado automáticamente
const res = await db.collection('users').add({
  first: 'Alan',
  middle: 'Mathison',
  last: 'Turing',
  born: 1912
});
console.log('Added document with ID: ', res.id);



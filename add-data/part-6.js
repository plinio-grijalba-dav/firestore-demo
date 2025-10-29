import {db} from '../db/index.js';

// Usando los diferentes tipos de datos de Firestore
const docRef = db.collection('dataTypes').doc('variousTypes');
await docRef.set({
  stringExample: 'Hello, World!',
  booleanExample: true,
  numberExample: 42,
  dateExample: new Date(),
  arrayExample: [1, 'two', true],
  objectExample: {
    nestedString: 'Nested Hello',
    nestedNumber: 100
  }
});
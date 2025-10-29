import { FieldValue } from '@google-cloud/firestore';
import {db} from '../db/index.js';

// Eliminar un documento
const res = await db.collection('cities').doc('DC').delete();
console.log('Document DC deleted:', res);

// Create a document reference
const cityRef = db.collection('cities').doc('BJ');

// Eliminar un campo de un documento
const resRemoveField = await cityRef.update({
  capital: FieldValue.delete()
});
console.log('Field capital deleted:', resRemoveField);
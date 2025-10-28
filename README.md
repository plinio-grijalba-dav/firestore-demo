# Firestore Demo
## 1. Agrega la biblioteca cliente del servidor a la app

```
npm install --save @google-cloud/firestore
```
## 2. Inicializa Firestore
```
import { Firestore } from '@google-cloud/firestore';
const db = new Firestore({
  projectId: 'YOUR_PROJECT_ID',
  keyFilename: '/path/to/keyfile.json',
});
```
## Otra forma de inicializar Firestore
```
npm install firebase-admin --save
```

```
import { cert, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const app = initializeApp({
  projectId: 'YOUR_PROJECT_ID',
  credential: cert('/path/to/keyfile.json'),
});
const db = getFirestore(app);
```

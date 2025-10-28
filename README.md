# Firestore Demo
## 1. Agrega la biblioteca cliente del servidor a la app

```
npm install --save @google-cloud/firestore
```
## 2. Inicializa Firestore en modo nativo
```
const { Firestore } = require('@google-cloud/firestore');
const firestore = new Firestore({
  projectId: 'YOUR_PROJECT_ID',
  keyFilename: '/path/to/keyfile.json',
});
```


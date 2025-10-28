import { Firestore } from '@google-cloud/firestore';
const db = new Firestore({
  projectId: 'cv-app-97390',
  keyFilename: '97390-firebase-adminsdk-fbsvc-da0aefc3ec.json',
});
export { db };
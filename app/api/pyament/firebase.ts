// import { initializeApp, cert, getApps } from 'firebase-admin/app';
// import { getFirestore } from 'firebase-admin/firestore';
// import { getAuth } from 'firebase-admin/auth';
// import { getStorage } from 'firebase-admin/storage';

// if (!getApps()?.length) {
//   initializeApp({
//     credential: cert({
//       projectId: process.env.FIREBASE_PROJECT_ID,
//       privateKey: process.env.FIREBASE_PRIVATE_KEY,
//       clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//     }),
//     storageBucket: process.env.GCLOUD_STORAGE_BUCKET,
//   });
//   // undefinedを許容
//   getFirestore().settings({ ignoreUndefinedProperties: true });
// }

// export const db = getFirestore();
// export const auth = getAuth();
// export const bucket = getStorage().bucket();

// Firebase initialization
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore } = require('firebase-admin/firestore');

function initializeFirebase() {
  initializeApp({
    credential: applicationDefault()
    // or use cert if you have a service account json
  });
  console.log('Firebase initialized');
}

module.exports = { initializeFirebase, getFirestore };
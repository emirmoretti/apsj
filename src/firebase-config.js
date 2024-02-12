//desa
/*
const config = {
  apiKey: "AIzaSyAwBQtDllfgzjKbw81b2GW7d_kI6BFEc00",
  authDomain: "apsj-1c73e.firebaseapp.com",
  projectId: "apsj-1c73e",
  storageBucket: "apsj-1c73e.appspot.com",
  messagingSenderId: "35208070461",
  appId: "1:35208070461:web:89e28d968bf3e9ea383154",
  measurementId: "G-M52HZFQ5QW"
};
*/

//prod
const config = {
  apiKey: "AIzaSyDVb0jj_MB3an5VQPwsLZ3FEmTAudMrXA8",
  authDomain: "apsj-argentina.firebaseapp.com",
  projectId: "apsj-argentina",
  storageBucket: "apsj-argentina.appspot.com",
  messagingSenderId: "278493569745",
  appId: "1:278493569745:web:b7cd6feea08eeeed3cdbf0",
  measurementId: "G-LCPQ056FTW"
};


export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.ts');
  } else {
    return config;
  }
}

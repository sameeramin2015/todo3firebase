var firebaseConfig = {
  apiKey: "AIzaSyBzrGFH7BJPQZPpwI0JdnHPo-aF-IO_q68",
  authDomain: "test-8bec6.firebaseapp.com",
  projectId: "test-8bec6",
  storageBucket: "test-8bec6.appspot.com",
  messagingSenderId: "99635658699",
  appId: "1:99635658699:web:f0d8d977216148a4a7404e",
  measurementId: "G-KTW1Y04HM3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
var db = firebase.firestore();

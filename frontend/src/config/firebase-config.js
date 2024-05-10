import firebase from 'firebase/compat/app';
import 'firebase/compat/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyodtMdZl6ygcYi3BXoKcuM3IJ-Ggsu0s",
  authDomain: "collab-project-7f488.firebaseapp.com",
  projectId: "collab-project-7f488",
  storageBucket: "collab-project-7f488.appspot.com",
  messagingSenderId: "252863160297",
  appId: "1:252863160297:web:552bf138353fb9ea4c3578",
  measurementId: "G-3SLM9JSN3N"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics.isSupported();
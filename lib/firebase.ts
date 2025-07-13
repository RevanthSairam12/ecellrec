import { initializeApp, FirebaseApp } from 'firebase/app';
import { getFirestore, Firestore } from 'firebase/firestore';
import { getAuth, Auth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyBvOkT3gZTgTa7TaK4HjCWTb6m2JjqXpXo",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "ecellrec.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "ecellrec",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "ecellrec.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "123456789012",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:123456789012:web:abcdef1234567890"
};

// Check if Firebase config is valid
if (!firebaseConfig.apiKey || firebaseConfig.apiKey === "AIzaSyBvOkT3gZTgTa7TaK4HjCWTb6m2JjqXpXo") {
  console.warn("Firebase configuration is using placeholder values. Please set up proper environment variables.");
}

// Initialize Firebase
let app: FirebaseApp;
let db: Firestore;
let auth: Auth;

try {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
  auth = getAuth(app);
} catch (error) {
  console.error("Firebase initialization failed:", error);
  // Fallback initialization with minimal config
  const fallbackConfig = {
    apiKey: "demo-key",
    authDomain: "demo.firebaseapp.com",
    projectId: "demo",
    storageBucket: "demo.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:demo"
  };
  app = initializeApp(fallbackConfig, 'fallback');
  db = getFirestore(app);
  auth = getAuth(app);
}

export { db, auth };
export default app; 

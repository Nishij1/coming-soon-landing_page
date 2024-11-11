import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const validateEmail = (email: string) => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

const isRateLimited = async (email: string) => {
  const timeNow = Date.now();
  const lastSubmission = localStorage.getItem(`lastSubmission_${email}`);
  
  if (lastSubmission) {
    const timeDiff = timeNow - parseInt(lastSubmission);
    if (timeDiff < 24 * 60 * 60 * 1000) { // 24 hours
      return true;
    }
  }
  
  localStorage.setItem(`lastSubmission_${email}`, timeNow.toString());
  return false;
};
    
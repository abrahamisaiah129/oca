import { getApp, getApps, initializeApp } from "firebase/app";
import { getAnalytics, isSupported, type Analytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBl3ZOlAiEZjLRw15v2Es6ErK_OA5GVZnY",
  authDomain: "ocaapp-e519e.firebaseapp.com",
  projectId: "ocaapp-e519e",
  storageBucket: "ocaapp-e519e.firebasestorage.app",
  messagingSenderId: "220507000468",
  appId: "1:220507000468:web:c80e6d82bb4f5bf11aae81",
  measurementId: "G-DYZ8XDWSWD",
};

export const firebaseApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(firebaseApp);

export async function getFirebaseAnalytics(): Promise<Analytics | null> {
  if (typeof window === "undefined" || !(await isSupported())) {
    return null;
  }

  return getAnalytics(firebaseApp);
}

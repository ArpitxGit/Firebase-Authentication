import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";
import serviceAccount from "./serviceAccountKey.json"; // Update the path as needed

const firebaseConfig = {
  apiKey: serviceAccount.private_key,
  authDomain: serviceAccount.auth_uri,
  projectId: serviceAccount.project_id,
  // storageBucket: serviceAccount.storageBucket,
  messagingSenderId: serviceAccount.client_email,
  // appId: serviceAccount.appId,
  // measurementId: serviceAccount.measurementId,
};

const fb = initializeApp(firebaseConfig);
const auth = getAuth(fb);
const db = getFirestore(fb);

export const addUser = async (email, password) => {
  try {
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw new Error("Error creating user: " + error.message);
  }
};

export const additionalField = async (uid, name, birthplace, age) => {
  try {
    await setDoc(doc(db, "users", uid), {
      uid: uid,
      name: name,
      birthplace: birthplace,
      age: age,
    });
    return "Additional field added successfully";
  } catch (error) {
    throw new Error("Error adding additional field: " + error.message);
  }
};

export const authenticate = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    throw new Error("Authentication failed: " + error.message);
  }
};

export const getfield = async (uid) => {
  try {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      return docSnap.data();
    } else {
      throw new Error("No such document!");
    }
  } catch (error) {
    throw new Error("Error getting document: " + error.message);
  }
};

export const logout = async () => {
  try {
    await auth.signOut();
    console.log("User signed out");
  } catch (error) {
    throw new Error("Error signing out: " + error.message);
  }
};

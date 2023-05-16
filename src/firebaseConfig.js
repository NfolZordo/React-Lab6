import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDEZ6DuIrSPet0jf5yY0-czePG21BMGPn4",
  authDomain: "testdb-562a1.firebaseapp.com",
  projectId: "testdb-562a1",
  storageBucket: "testdb-562a1.appspot.com",
  messagingSenderId: "163190826726",
  appId: "1:163190826726:web:a42fe56c2e316510103d27"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getTestDoc(db) {
  const testDocRef = doc(db, "test", "6jf4sSXQHkvENKzgcpxw");
  const testDocSnapshot = await getDoc(testDocRef);
  const testData = testDocSnapshot.data();
  return testData;
}

async function addTestData(db, data) {
  const testDocRef = doc(db, "test", "6jf4sSXQHkvENKzgcpxw");
  await setDoc(testDocRef, data, { merge: true });
}

export { db, getTestDoc, addTestData };

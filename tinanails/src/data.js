import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCWf5mO0kXFj2HTYz5YJ19PBgXDBSvt-tQ",
  authDomain: "backendtinanails.firebaseapp.com",
  projectId: "backendtinanails",
  storageBucket: "backendtinanails.appspot.com",
  messagingSenderId: "637845745210",
  appId: "1:637845745210:web:90d02f02c85fa446008f03"
};

export const getProducts = async () => {
 
  const app = initializeApp(firebaseConfig);
  
  const database = getFirestore(app);
  
  const productsCollection = collection(database, 'products');
  
  const snapshot = await getDocs(productsCollection);
 
  const products = snapshot.docs.map(doc => doc.data());
  return products;
}
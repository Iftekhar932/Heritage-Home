import {
  collection,
  deleteDoc,
  doc,
  setDoc,
  getDoc,
  getDocs,
  onSnapshot,
  updateDoc,
} from "firebase/firestore";

const randomIDGenerator = () => {
  let randomID = "";

  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";

  for (let i = 0; i < array.length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomID += characters.charAt(randomIndex);
  }

  return randomID;
};

export const createData = async (collectionName, data) => {
  const collectionID = randomIDGenerator();
  try {
    const docRef = doc(db, collectionName, collectionID);
    await setDoc(docRef, { collectionID, ...data });
  } catch (error) {
    console.log("✨ 🌟  createData  error: 31 line", error);
  }
};

export const readData = async (collection, id) => {
  try {
    const docRef = doc(db, collection, id); // "doc" creates a reference to a specific collection within a document
    const docSnap = await getDoc(docRef); // "getDoc" retrieves a single document from collection

    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("No such document!");
    }
  } catch (error) {
    console.log("✨ 🌟  readData  error 47 line:", error?.message);
  }
};

export const updateData = async (collection, id, data) => {
  try {
    const docRef = doc(db, collection, id); // "doc" creates a reference to a specific collection within a document
    await updateDoc(docRef, {
      id: id,
      ...data,
    });

    console.log("Updated");
  } catch (error) {
    console.log("✨ 🌟  readData  error 60 line:", error?.message);
  }
};

export const deleteData = async (db, collection, id) => {
  try {
    docRef = doc(db, collection, id);
    await deleteDoc(docRef);
    console.log("Deleted");
  } catch (error) {
    console.log("✨ 🌟  deleteData  error 72 line:", error?.message);
  }
};

export const readAllData = async (collectionName) => {
  try {
    const newDataArr = [];
    const querySnapShot = await getDocs(collection(db, collection)); // "getDocs" Retrieves a collection of documents from Firestore based on a query.
    querySnapShot.forEach((doc) => {
      console.log(doc.id, "=>", doc.data());
      newDataArr.push(doc.data());
    });
    return newDataArr;
  } catch (error) {
    console.log("✨ 🌟  readAllData  error:", error);
  }
};

export const listenToCollection = (collectionName, callback) => {
  const collectionRef = collection(db, collectionName); // "collection" Creates a reference to a collection within your Firestore database.

  // onSnapshot() establishes a listener on a Firestore collection or query. This listener gets triggered whenever there are changes (additions, modifications, or deletions) to the data that matches your query.
  return onSnapshot(collectionRef, (querySnapshot) => {
    const newDataArr = [];
    querySnapshot.forEach((doc) => {
      newDataArr.push(doc.data());
    });
    callback(newDataArr);
  });
};

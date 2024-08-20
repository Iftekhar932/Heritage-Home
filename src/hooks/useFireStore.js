import {
  collection,
  query,
  where,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
} from "firebase/firestore";
import { db } from "../firebase/firebase.init";

const useFireStore = () => {
  // Add a new document("constructions") in collection "construction_data"
  const createData = async (dataToCreate) => {
    console.log("🚀 ~ createData ~ dataToCreate:", dataToCreate.project);
    await setDoc(doc(db, "construction_projects", dataToCreate?.project), {
      projects: dataToCreate,
    });
  };
  // delete document
  const deleteData = async (dataToDelete) => {
    await deleteDoc(doc(db, "cities", "DC"));
  };
  // data will be merged if the specified document already exists
  const docRef = doc(db, "construction_projects", "constructions");
  const mergeData = async () => {
    await setDoc(docRef, { bolo: "acca" }, { merge: true });
  };

  // The following example shows how to retrieve the contents of a single document using get():
  const readData = async () => {
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // docSnap.data() will be undefined in this case
      window.alert("No such document!");
    }
  };

  // retrieve multiple documents with one request by querying documents in a collection. For
  const q = query(collection(db, "construction_projects")); // can use "where" here for certain queries, checkout the docs
  const readAllData = async () => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  return {
    createData,
    mergeData,
    deleteDoc,
    readData,
    readAllData,
    docRef,
  };
};
export default useFireStore;

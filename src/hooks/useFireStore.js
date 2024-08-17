import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.init";

const useFireStore = () => {
  // Add a new document("constructions") in collection "construction_data"
  const createData = async () => {
    await setDoc(doc(db, "construction_data", "constructions"), {
      name: "found",
      state: "ki",
      country: "USA",
    });
  };

  // data will be merged if the specified document already exists
  const docRef = doc(db, "construction_data", "constructions");
  const mergeData = async () => {
    await setDoc(docRef, { bolo: "acca" }, { merge: true });
  };

  return {
    createData,
    mergeData,
    docRef,
  };
};
export default useFireStore;

import { db } from "../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Esta función guarda una cita en Firestore.
// Recibe un objeto con los datos del formulario.

export async function saveAppointment(appointmentData) {
  try {
    const collectionRef = collection(db, "appointments");

    const dataToSave = {
      ...appointmentData,
      createdAt: serverTimestamp(),
    };

    const docRef = await addDoc(collectionRef, dataToSave);
    return docRef.id;
  } catch (error) {
    console.error("Error al guardar la cita:", error);
    throw error;
  }
}

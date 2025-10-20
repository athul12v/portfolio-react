import { collection, addDoc, doc, setDoc } from 'firebase/firestore';
import { db } from '@/firebase/config';

// Method 1: Auto-generated Document ID
export const addTestContact = async () => {
  try {
    const docRef = await addDoc(collection(db, "contacts"), {
      name: "Test User",
      email: "test@example.com",
      subject: "Test Message",
      message: "This is a test message to verify the collection setup.",
      createdAt: new Date()
    });
    console.log("Test document added with auto-generated ID: ", docRef.id);
    return docRef.id;
  } catch (error) {
    console.error("Error adding test document: ", error);
    throw error;
  }
};

// Method 2: Custom Document ID
export const addTestContactWithCustomId = async (customId) => {
  try {
    const docRef = doc(db, "contacts", customId);
    await setDoc(docRef, {
      name: "Test User",
      email: "test@example.com",
      subject: "Test Message",
      message: "This is a test message with custom ID.",
      createdAt: new Date()
    });
    console.log("Test document added with custom ID: ", customId);
    return customId;
  } catch (error) {
    console.error("Error adding test document with custom ID: ", error);
    throw error;
  }
}; 
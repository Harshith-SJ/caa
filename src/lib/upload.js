// src/lib/upload.js
import { openDB } from 'idb';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from './firebase';

const DB_NAME = 'userAvatars';
const STORE_NAME = 'avatars';
const DB_VERSION = 1;

// Initialize IndexedDB
const initDB = async () => {
  return openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      // Create object store if it doesn't exist
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    },
  });
};

// Store image and return URL
export const storeImage = async (userId, file) => {
  try {
    // 1. Store in Firebase Storage
    const storage = getStorage();
    const storageRef = ref(storage, `avatars/${userId}`);
    await uploadBytes(storageRef, file);
    const downloadURL = await getDownloadURL(storageRef);

    // 2. Store in IndexedDB
    const db = await initDB();
    await db.put(STORE_NAME, {
      file: file,
      url: downloadURL,
      timestamp: Date.now()
    }, userId);

    // 3. Update Firestore user document
    const userRef = doc(db, 'users', userId);
    await updateDoc(userRef, {
      avatar: downloadURL
    });

    return downloadURL;
  } catch (error) {
    console.error('Error storing image:', error);
    throw error;
  }
};

// Retrieve image by userId
export const getImage = async (userId) => {
  try {
    const db = await initDB();
    return await db.get(STORE_NAME, userId);
  } catch (error) {
    console.error('Error retrieving image:', error);
    throw error;
  }
};

// Delete image by userId
export const deleteImage = async (userId) => {
  try {
    const db = await initDB();
    await db.delete(STORE_NAME, userId);
  } catch (error) {
    console.error('Error deleting image:', error);
    throw error;
  }
};

// Clear all images from store
export const clearImages = async () => {
  try {
    const db = await initDB();
    await db.clear(STORE_NAME);
  } catch (error) {
    console.error('Error clearing images:', error);
    throw error;
  }
};
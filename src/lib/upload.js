// src/lib/upload.js
import { openDB } from 'idb';

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
    const db = await initDB();
    
    // Create blob URL for the image
    const objectUrl = URL.createObjectURL(file);
    
    // Store file and URL in IndexedDB
    await db.put(STORE_NAME, {
      file,
      url: objectUrl,
      timestamp: Date.now()
    }, userId);
    
    return objectUrl;
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
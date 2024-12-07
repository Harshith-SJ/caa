import { openDB } from 'idb';

const initDB = async () => {
  const db = await openDB('my-database', 1, {
    upgrade(db) {
      db.createObjectStore('files');
    },
  });
  return db;
};

export const setFile = async (key, file) => {
  const db = await initDB();
  await db.put('files', file, key);
};

export const getFile = async (key) => {
  const db = await initDB();
  return await db.get('files', key);
};
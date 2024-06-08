import { openDB } from 'idb';

const initDB = async () => {
  const db = await openDB('jate', 1, {
    upgrade(db) {
      db.createObjectStore('content', { keyPath: 'id', autoIncrement: true });
    },
  });
  return db;
};

export const saveContent = async (content) => {
  const db = await initDB();
  await db.put('content', { id: 1, content });
};

export const getContent = async () => {
  const db = await initDB();
  return (await db.get('content', 1))?.content;
};

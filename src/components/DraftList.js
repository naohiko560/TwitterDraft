import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';

export const DraftList = () => {
  const [drafts, setDrafts] = useState([{ id: '', text: '', timestamp: null }]);

  useEffect(() => {
    const q = query(collection(db, 'drafts'), orderBy('timestamp', 'desc'));
    const unSub = onSnapshot(q, async (snapshot) => {
      setDrafts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text,
          timestamp: doc.data().timestamp,
        }))
      );
    });

    return () => {
      unSub();
    };
  }, []);

  return (
    <>
      {drafts.map((draft) => (
        <div key={draft.id}>
          <p>{draft.text}</p>
          <p>{new Date(draft.timestamp?.toDate()).toLocaleString()}</p>
        </div>
      ))}
    </>
  );
};

import { useState, useEffect } from 'react';
import { db } from '../firebase';
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  doc,
  deleteDoc,
} from 'firebase/firestore';

export const DraftList = () => {
  const [drafts, setDrafts] = useState([{ id: '', text: '', createdAt: null }]);

  // データ取得
  useEffect(() => {
    const q = query(collection(db, 'drafts'), orderBy('createdAt', 'desc'));
    const unSub = onSnapshot(q, async (snapshot) => {
      setDrafts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text,
          // createdAt: doc.data().createdAt,
        }))
      );
    });

    return () => {
      unSub();
    };
  }, []);

  // データ削除
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'drafts', id));
  };

  return (
    <>
      {drafts.map((draft) => (
        <div key={draft.id}>
          <p>{draft.text}</p>
          <button onClick={() => deleteItem(draft.id)}>削除</button>
          {/* <p>{new Date(draft.createdAt?.toDate()).toLocaleString()}</p> */}
        </div>
      ))}
    </>
  );
};

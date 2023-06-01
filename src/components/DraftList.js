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
import { Modal } from './Modal';

export const DraftList = () => {
  const [drafts, setDrafts] = useState([{ id: '', text: '', createdAt: null }]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);
  const [edit, setEdit] = useState(null);

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

  // データ編集
  const editItem = async (draft) => {
    setShow(true);
    setId(draft.id);
    setEdit(draft.text);
  };

  return (
    <>
      {drafts.map((draft) => (
        <div key={draft.id}>
          <p>{draft.text}</p>
          <button onClick={() => deleteItem(draft.id)}>削除</button>
          <button onClick={() => editItem(draft)}>編集</button>
          {/* <p>{new Date(draft.createdAt?.toDate()).toLocaleString()}</p> */}
        </div>
      ))}
      <Modal show={show} setShow={setShow} id={id} edit={edit} />
    </>
  );
};

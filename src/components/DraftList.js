import { useState, useEffect } from 'react';
import { db, auth } from '../firebase';
import { collection, query, onSnapshot, orderBy } from 'firebase/firestore';
import { Modal } from './Modal';
import { DelModal } from './DelModal';

export const DraftList = () => {
  const [drafts, setDrafts] = useState([
    { id: '', text: '', uid: '', createdAt: null },
  ]);
  const [show, setShow] = useState(false);
  const [id, setId] = useState(null);
  const [uid, setUid] = useState(null);
  const [edit, setEdit] = useState(null);
  const [delmol, setDelmol] = useState(false);

  // データ取得
  useEffect(() => {
    const q = query(collection(db, 'drafts'), orderBy('createdAt', 'desc'));
    const unSub = onSnapshot(q, async (snapshot) => {
      setDrafts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          text: doc.data().text,
          uid: doc.data().uid,
          // createdAt: doc.data().createdAt,
        }))
      );
    });

    return () => {
      unSub();
    };
  }, []);

  // データ削除の確認
  const deleteItem = async (id) => {
    setDelmol(true);
    setId(id);
  };

  // データ編集
  const editItem = async (draft) => {
    setShow(true);
    setId(draft.id);
    setEdit(draft.text);
    setUid(draft.uid);
  };

  return (
    <>
      {drafts.map((draft) => (
        <div
          className={`msg ${
            draft.uid === auth.currentUser.uid ? '' : 'hidden'
          }`}
          key={draft.id}
        >
          <div className="border-solid border-2 max-w-xl mt-5 m-auto py-5">
            <div>
              <textarea
                className="border resize-none outline-none p-10"
                rows={6}
                cols={64}
                value={draft.text}
              />
            </div>
            <button onClick={() => deleteItem(draft.id)}>削除</button>
            <button onClick={() => editItem(draft)}>編集</button>
            {/* <p>{new Date(draft.createdAt?.toDate()).toLocaleString()}</p> */}
          </div>
        </div>
      ))}
      <Modal show={show} setShow={setShow} id={id} edit={edit} uid={uid} />
      <DelModal delmol={delmol} setDelmol={setDelmol} id={id} />
    </>
  );
};

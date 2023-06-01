import React from 'react';
import { db } from '../firebase';
import { doc, deleteDoc } from 'firebase/firestore';

export const DelModal = (props) => {
  // データ削除
  const deleteItem = async (id) => {
    await deleteDoc(doc(db, 'drafts', props.id));
    closeModal();
  };

  // モーダルを閉じる
  const closeModal = () => props.setDelmol(false);

  if (props.delmol) {
    return (
      <>
        <div id="overlay" onClick={closeModal}>
          <div id="content" onClick={(e) => e.stopPropagation()}>
            <p>下書きを削除しますか？</p>
            <p>※下書きを削除します。この操作は取り消せません。</p>
            <p>
              <button onClick={deleteItem}>削除</button>
            </p>
            <p>
              <button onClick={closeModal}>キャンセル</button>
            </p>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};

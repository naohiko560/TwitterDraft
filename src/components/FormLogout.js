import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { DraftListLogOut } from './DraftListLogOut';

export const FormLogout = () => {
  const [isActive, setIsActive] = useState();
  const [count, setCount] = useState(0);
  const [inputText, setInputText] = useState('');

  // 文字数カウント関数
  const countHandler = (e) => {
    let valLen = e.currentTarget.value.length; // 文字列の長さを取得
    let countNum = 0; // カウントした文字数を変数へ代入

    for (let i = 0; i < valLen; i++) {
      let uniCode = e.currentTarget.value.codePointAt(i); // codePointAt() → Unicodeコードポイントを返す

      // 半角か全角かでカウントする文字数を変える
      if (uniCode >= 0x0 && uniCode <= 0x7f) {
        countNum += 0.5;
      } else {
        countNum += 1;
      }
    }

    setCount(countNum);

    // countが140より大きい時はカウント表示を赤文字。140以下なら黒文字に戻す
    if (countNum > 140) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  // 下書きをサーバに保存
  const onSubmitAdd = async (e) => {
    e.preventDefault();

    if (inputText === '') return;

    try {
      await addDoc(collection(db, 'drafts'), {
        text: inputText,
        uid: 'test',
        createdAt: serverTimestamp(),
      });
      setInputText('');
      setCount(0);
    } catch (e) {
      console.error('Error adding document: ', e);
    }
  };

  return (
    <>
      <form onSubmit={onSubmitAdd} id="textarea" className="mt-10">
        <textarea
          name="textarea"
          id="textarea"
          rows="10"
          cols="64"
          placeholder="ここに下書きを入力してください"
          className={`border resize-none textarea ${isActive ? 'textRed' : ''}`}
          onKeyUp={countHandler}
          onChange={(e) => setInputText(e.target.value)}
          value={inputText}
        />
      </form>
      <button className="button" type="submit" form="textarea">
        保存
      </button>
      <p id="textLength" className={`textarea ${isActive ? 'textRed' : ''}`}>
        文字数 : {count}/140
      </p>
      <div>
        <DraftListLogOut />
      </div>
    </>
  );
};

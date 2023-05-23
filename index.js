(() => {
  // TweetLength = (e) => {
  //   document.getElementById('textLength').innerHTML =
  //     '文字数 : ' + e.length + '/160';
  // };

  TweetLength = (e) => {
    // カウント数を格納する変数
    let count = 0;

    //  文字列を１つ１つ取得し、半角か全角かでカウント数を判断
    for (let i = 0; i < e.length; i++) {
      let character = e.charCodeAt(i);

      // 半角の時は+1、全角の時は+2
      if (character >= 0x0 && character <= 0x7f) {
        count += 1;
      } else {
        count += 2;
      }
    }

    document.getElementById('textLength').innerHTML =
      '文字数 : ' + count/2 + '/140';
  };
})();

(() => {
  TweetLength = (e) => {
    document.getElementById('textLength').innerHTML =
      '文字数 : ' + e.length + '/160';
  };
})();

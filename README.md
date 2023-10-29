# TwitterDraft
Reactで制作したX（旧Twitter）の下書きツールです。
文字数のカウントと下書き保存ができます。

## 制作の動機
Reactについて学ぶ為、欲しい機能を実装したX（旧Twitter）の下書き用ツールを作成しようと考えました。

# URL
https://github.com/naohiko560/TwitterDraft
Googleアカウントでログインすることで保存機能が使えます。

# 使用技術
- React
- JavaScript
- TailwindCSS
- Firebase
- Vercel

# 実装機能
- 下書きの文字数カウント機能（140字より多い場合、赤文字になる）
- Googleでのサインイン・サインアウト機能 ※Firebase Authentication を利用
- サインイン時、下書きの保存・編集・削除ができる機能 ※Cloud Firestore を利用
- GitHub（main）の更新と連動してツールが更新される機能

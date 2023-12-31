# TwitterDraft
Reactで制作したX（旧Twitter）の下書きツールです。  
文字数のカウントと下書き保存ができます。
下書き保存はGoogleアカウントでログインすることで使えます。

<br>

# 制作物のURL
https://twitter-draft.vercel.app/

<br>

## 制作の動機
- Reactについて学ぶ為、欲しい機能を実装したX（旧Twitter）の下書き用ツールを作成しようと考えました。
- Firebaseについて学びたかったので、保存機能はFirebaseのAuthenticationとFirestoreを利用しました。

<br>

# 制作物のイメージ
![制作物のイメージ](/docs/images/app_view.gif)
※保存や編集、サインインといったポジティブなボタンは青色、削除やサインアウトといったネガティブなボタンは赤色、キャンセルボタンは灰色にしました。  
色に規則性を持たせることで、ユーザーが直感的に操作できるようにしています。
<br>

## 機能一覧
| トップ画面 | 文字数カウント機能 |
| ---- | ---- |
| ![トップ画面](/docs/images/design_top.png) | ![文字数カウント機能](/docs/images/design_error.png) |
| ログインすることで下書きを保存できます。 | 全角を1文字、半角を0.5文字とし、140文字より大きくなると赤文字になります。 |

| ログイン画面 | 保存した下書きリスト |
| ---- | ---- |
| ![ログイン画面](/docs/images/design_sign_in.png) | ![保存した下書きリスト](/docs/images/design_list.png) |
| グーグルで使用しているプロフィール画像と保存ボタン、サインアウトボタンが表示されます。 | 保存ボタンを押すと、上から新しい順に追加されていきます。 |

| 削除の確認ポップアップ画面 | 編集画面 |
| ---- | ---- |
| ![削除の確認ポップアップ画面](/docs/images/design_popup_del.png) | ![編集画面](/docs/images/design_popup_hozon.png) |
| 削除の際はポップアップを挟んで誤操作を防止します。キャンセルボタン or 灰色枠をクリックするとキャンセルされます。 | 保存した下書きを編集する時はポップアップ画面にて行います。 |

<br>

# 使用技術
| カテゴリ          | 技術スタック                                     |
| ----------------- | --------------------------------------------------   |
| フロントエンド          | JavaScript, React, tailwind CSS                       |
| インフラ    | Firebase, Vercel                          |
| デザイン            | Figma                                         |
| その他              | Git, GitHub, Prettier |

<br>

# 実装機能
- 下書きの文字数カウント機能（140字より多い場合、赤文字になる）
- Googleでのサインイン・サインアウト機能 ※Firebase Authentication を利用
- サインイン時、下書きの保存・編集・削除ができる機能 ※Cloud Firestore を利用
- GitHub（main）の更新と連動してツールが更新される機能

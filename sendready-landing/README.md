# SendReady Landing

## Local Development

このプロジェクトのローカル開発URLは `http://localhost:3001` に固定します。

- `127.0.0.1` は使わない
- `3000` は使わない
- 開発サーバーは `pnpm dev` で起動する

```bash
pnpm dev
```

`package.json` の `dev` script で `next dev --hostname localhost --port 3001` を指定しています。

## Signup Notification

先行登録フォームは Gmail の16桁 App Password を使って通知メールを送ります。

`.env.local` に以下を設定してください。

```bash
GMAIL_USER=your-gmail-address@gmail.com
GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
SIGNUP_NOTIFY_TO=your-gmail-address@gmail.com
```

`GMAIL_APP_PASSWORD` はスペース入りでも動きます。送信元は `GMAIL_USER`、通知先は `SIGNUP_NOTIFY_TO` です。

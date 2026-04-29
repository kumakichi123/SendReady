import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SendReady",
  description: "AIエージェント内蔵の営業SaaS。営業リスト作成から営業メール文面作成まで。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}

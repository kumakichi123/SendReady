import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SendReady",
  description: "営業先リスト作成から営業メール作成まで、AIで一気通貫。",
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

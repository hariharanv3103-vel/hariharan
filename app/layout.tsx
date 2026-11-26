
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hariharan V | Portfolio",
  description: "Welcome to Hariharan V's personal portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

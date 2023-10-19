import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "JavaScript Days Kartoffelshop",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header>
          <h1>
            <Link href="/">Der Kartoffelshop</Link>
          </h1>
        </header>
        {children}
        <footer>Impressum etc.</footer>
      </body>
    </html>
  );
}

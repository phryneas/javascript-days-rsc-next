import Link from "next/link";
import "./globals.css";
import type { Metadata } from "next";
import { Providers } from "./Providers";

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
        <Providers>{children}</Providers>
        <footer>
          Impressum etc. - und <Link href="/admin">geheimer Admin-Bereich</Link>
        </footer>
      </body>
    </html>
  );
}

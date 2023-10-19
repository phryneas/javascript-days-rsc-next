import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h2>Willkommen im Kartoffelshop!</h2>
      <p>Wir bieten eine Reihe hochwertiger Knollen an.</p>
      <Link href={"/products"}>Zu unseren Delikatessen</Link>
    </main>
  );
}

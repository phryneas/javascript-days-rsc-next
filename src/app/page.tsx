import { Product } from "@/types";
import Link from "next/link";

export default async function Home() {
  return (
    <main>
      <h2>Willkommen im Kartoffelshop!</h2>
      <p>
        Wir bieten eine Reihe hochwertiger Knollen an - hier geht&apos;s{" "}
        <Link href={"/products"}>zum Shop</Link>
      </p>
    </main>
  );
}

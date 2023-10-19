import { getProducts } from "@/api";
import Link from "next/link";
import { Suspense } from "react";

export default async function Layout({ children }: { children: any }) {
  const products = await getProducts();

  return (
    <>
      <nav>
        <ul>
          {products.map((potato) => (
            <Link key={potato.id} href={`/products/${potato.id}`}>
              <li>{potato.name}</li>
            </Link>
          ))}
        </ul>
      </nav>
      {children}
    </>
  );
}

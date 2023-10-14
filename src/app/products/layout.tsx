import { getProducts } from "@/api";
import Link from "next/link";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const products = getProducts();
  return (
    <>
      <nav>
        {(await products).map((product) => (
          <Link href={`/products/${product.id}`} key={product.id}>
            {product.name}
          </Link>
        ))}
        <p>...</p>
      </nav>
      {children}
    </>
  );
}

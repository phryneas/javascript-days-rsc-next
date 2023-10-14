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
        <Link href={"/admin/new"}>Neues Produkt</Link>
        <hr />
        Bearbeiten:
        {(await products).map((product) => (
          <Link href={`/admin/edit/${product.id}`} key={product.id}>
            {product.name}
          </Link>
        ))}
      </nav>
      {children}
    </>
  );
}

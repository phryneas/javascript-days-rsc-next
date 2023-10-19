import { getProducts } from "@/api";
import Link from "next/link";

export default async function ProductPage() {
  const products = await getProducts();

  return (
    <main>
      <h2>Unsere Bestseller</h2>
      <div className="grid grid-cols-2 gap-8">
        {products.map((potato) => (
          <Link key={potato.id} href={`/products/${potato.id}`}>
            <article>
              <h3>{potato.name}</h3>
              <img
                src={"/" + potato.image.src}
                alt=""
                title={potato.image.attribution}
              />
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}

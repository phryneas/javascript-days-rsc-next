import { getProducts } from "@/api";
import { Product } from "@/types";
import Link from "next/link";

export default async function Home() {
  const potatoes = await getProducts();

  return (
    <main>
      <h2>Unsere Bestseller</h2>
      <div className="grid grid-cols-2 gap-8">
        {potatoes.map((potato) => (
          <Link key={potato.id} href={`/products/${potato.id}`}>
            <article>
              <h3>{potato.name}</h3>
              <img
                className="h-96"
                src={"/" + potato.image.src}
                alt={potato.name}
                title={`Foto: ${potato.image.attribution}`}
              />
            </article>
          </Link>
        ))}
      </div>
    </main>
  );
}

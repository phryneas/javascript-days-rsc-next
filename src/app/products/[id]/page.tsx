import { getProduct, getProducts } from "@/api";
import { Reviews } from "./Reviews";

export async function generateStaticParams() {
  const products = await getProducts();

  return products.map((product) => ({
    id: String(product.id),
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return (
    <main>
      <article>
        <h2>{product.name}</h2>
        <img
          className="h-72"
          src={"/" + product.image.src}
          alt={product.name}
          title={`Foto: ${product.image.attribution}`}
        />
        <h3>{product.short}</h3>
        <p>{product.long}</p>
        <Reviews productId={product.id} />
      </article>
    </main>
  );
}

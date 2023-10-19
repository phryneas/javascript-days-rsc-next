import { getProduct, getProducts } from "@/api";

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((p) => ({
    id: String(p.id),
  }));
}

export default async function KartoffelDetails({
  params,
}: {
  params: { id: string };
}) {
  const potato = await getProduct(params.id);

  return (
    <main>
      <article>
        <h2>{potato.name}</h2>
        <img
          src={"/" + potato.image.src}
          alt=""
          title={potato.image.attribution}
        />
        <h3>{potato.short}</h3>
        <p>{potato.long}</p>
      </article>
    </main>
  );
}

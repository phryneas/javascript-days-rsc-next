import { getProduct, updateProduct } from "@/api";
import { revalidateTag } from "next/cache";

async function update(data: FormData) {
  "use server";

  await updateProduct({
    id: Number(data.get("id")),
    name: String(data.get("name")),
    short: String(data.get("short")),
    long: String(data.get("long")),
    image: {
      src: String(data.get("image")),
      attribution: String(data.get("attribution")),
    },
  });

  revalidateTag(`products`);
  revalidateTag(`products/${data.get("id")}`);
}

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);
  return (
    <main>
      <h2>Editing &quot;{product.name}&quot;</h2>
      <form action={update}>
        <input type="hidden" name="id" value={product.id} />
        <label>
          Name <input type="text" name="name" defaultValue={product.name} />
        </label>
        <label>
          Short <input type="text" name="short" defaultValue={product.short} />
        </label>
        <label>
          Long <textarea name="long" defaultValue={product.long} />
        </label>
        <label>
          Image
          <input type="text" name="image" defaultValue={product.image.src} />
        </label>
        <label>
          Attribution
          <input
            type="text"
            name="attribution"
            defaultValue={product.image.attribution}
          />
        </label>
        <button type="submit">Speichern</button>
      </form>
    </main>
  );
}

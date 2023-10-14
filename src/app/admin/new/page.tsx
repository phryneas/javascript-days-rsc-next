import { createProduct } from "@/api";
import { revalidateTag } from "next/cache";

async function create(data: FormData) {
  "use server";

  const product = await createProduct({
    name: String(data.get("name")),
    short: String(data.get("short")),
    long: String(data.get("long")),
    image: {
      src: String(data.get("image")),
      attribution: String(data.get("attribution")),
    },
  });

  revalidateTag(`products`);
  revalidateTag(`products/${product.id}`);
}

export default async function Page() {
  return (
    <main>
      <h2>Neues Produkt anlegen</h2>
      <form action={create}>
        <label>
          Name <input type="text" name="name" />
        </label>
        <label>
          Short <input type="text" name="short" />
        </label>
        <label>
          Long <textarea name="long" />
        </label>
        <label>
          Image
          <input type="text" name="image" />
        </label>
        <label>
          Attribution
          <input type="text" name="attribution" />
        </label>
        <button type="submit">Speichern</button>
      </form>
    </main>
  );
}

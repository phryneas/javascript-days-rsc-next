import { getProduct, updateProduct } from "@/api";
import { revalidateTag } from "next/cache";

async function speichern(data: FormData) {
  "use server";

  const id = data.get("id") as string;
  if (!id) throw new Error(id + " nicht gefunden");
  const potato = await getProduct(id as string);
  const name = data.get("name") as string;
  const short = data.get("short") as string;
  const long = data.get("long") as string;

  await updateProduct({ ...potato, id: Number(id), name, short, long });

  revalidateTag("products");

  console.log(data);
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
        <form action={speichern}>
          <input type="hidden" name="id" value={params.id} />
          <label>
            Name: <input type="text" name="name" defaultValue={potato.name} />
          </label>
          <label>
            Short:
            <input type="text" name="short" defaultValue={potato.short} />
          </label>
          <label>
            Long: <input type="text" name="long" defaultValue={potato.long} />
          </label>
          <button type="submit">Speichern</button>
        </form>
      </article>
    </main>
  );
}

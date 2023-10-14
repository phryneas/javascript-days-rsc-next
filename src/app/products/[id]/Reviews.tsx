"use client";

import { createProductReview, getProductReviews } from "@/api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function Reviews({ productId }: { productId: number }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["reviews", productId],
    queryFn: () => getProductReviews(productId),
  });

  const queryClient = useQueryClient();
  const { isLoading: isSubmitting, mutate } = useMutation({
    mutationFn: createProductReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews", productId] });
    },
  });

  function onSubmit(data: FormData) {
    mutate({
      productId,
      stars: Number(data.get("stars")),
      body: String(data.get("body")),
      author: String(data.get("author")),
    });
  }

  if (isError) return null;
  return (
    <article>
      <h3>Reviews</h3>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.map((review) => (
            <p key={review.id}>
              {review.stars}/5: <b>{review.body}</b> -- <i>{review.author}</i>
            </p>
          ))}
          <h3>Neuer Review</h3>
          <form action={onSubmit}>
            <label>
              Sterne (aus 5){" "}
              <input
                name="stars"
                type="number"
                defaultValue={5}
                max={5}
                min={1}
              />
            </label>
            <label>
              Kommentar <input name="body" type="text" />
            </label>
            <label>
              Autor <input name="author" type="text" />
            </label>
            <button disabled={isSubmitting} type="submit">
              Kommentar abgeben!
            </button>
          </form>
        </>
      )}
    </article>
  );
}

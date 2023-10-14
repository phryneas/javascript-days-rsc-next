import { Product, Review } from "@/types";

export async function getProducts(): Promise<Product[]> {
  const response = await fetch("http://localhost:3004/products", {
    next: { tags: ["products"] },
  });
  return response.json();
}

export async function createProduct(
  product: Omit<Product, "id">
): Promise<Product> {
  const response = await fetch(`http://localhost:3004/products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return response.json();
}

export async function updateProduct(product: Product): Promise<Product> {
  const response = await fetch(`http://localhost:3004/products/${product.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });
  return response.json();
}

export async function getProduct(id: string | number): Promise<Product> {
  const response = await fetch(`http://localhost:3004/products/${id}`, {
    next: { tags: [`products/${id}`] },
  });
  return response.json();
}

export async function getProductReviews(
  id: string | number
): Promise<Review[]> {
  const response = await fetch(
    `http://localhost:3004/reviews?productId=${id}`,
    {
      next: { tags: [`productReviews/${id}`] },
    }
  );
  return response.json();
}

export async function createProductReview(
  review: Omit<Review, "id">
): Promise<Review[]> {
  const response = await fetch(`http://localhost:3004/reviews`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(review),
  });
  return response.json();
}

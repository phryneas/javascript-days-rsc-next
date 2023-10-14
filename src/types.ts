export interface Product {
  id: number;
  name: string;
  short: string;
  long: string;
  image: {
    src: string;
    attribution: string;
  };
}

export interface Review {
  id: number;
  productId: number;
  stars: number;
  body: string;
  author: string;
}

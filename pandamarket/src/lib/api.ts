type Product = {
  id: number;
  name: string;
  price: number;
  description: string;
  tags: string[];
  createdAt: string;
  favoriteCount: number;
};

const API_URL = "http://localhost:8000";

export default async function getProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`Failed to fetch products: ${response.statusText}`);
    }
    const data: Product[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}


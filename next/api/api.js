const Base_URL = 'https://panda-market-api.vercel.app';

export async function getProducts() {
  const response = await fetch(`${Base_URL}/products`);
  return await response.json();
}

export async function getArticles() {
  const response = await fetch(`${Base_URL}/articles`);
  return await response.json();
}
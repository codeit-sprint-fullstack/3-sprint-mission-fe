export async function GetProducts() {
  const Url =
    "https://panda-market-api.vercel.app/products?page=1&pageSize=10&orderBy=recent";
  const response = await fetch(Url);
  const data = await response.json();
  return data;
}
// const data = await GetProducts();
// console.log(data);

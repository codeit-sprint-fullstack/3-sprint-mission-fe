
export const getProduct = async () => {
    const response = await fetch(`https://panda-market-api.vercel.app/products`);
    const data = await response.json();
    return data;
}
  



export async function getBestProduct({order = ''}) {
    const query = `order=${order}`;
    const response = await fetch(`https://panda-market-api.vercel.app/products?${query}`);
    const body = await response.json();
    return  body;  
}

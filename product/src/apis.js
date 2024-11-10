
export const getProduct = async () => {
    const response = await fetch(`https://product-panda.onrender.com/product`);
    const data = await response.json();
    return data;
}
  
export const getBestProduct = async ({order=''}) => {
    const query = `order=${order}`;
    const response = await fetch(`https://product-panda.onrender.com/product?${query}`);
    const body = await response.json();
    return body;
    
}


export async function getProducts(params = {}) {
    const query = new URLSearchParams(params).toString();

    try {
        const response = await fetch(`https://product-panda.onrender.com/product?${query}`);
    if ( !response.ok){
        throw new Error(`HTTP error: ${response.status}`);
    }
    const body = await response.json();
    return body;
    }catch (error){
        console.error("Failed to fetch products:", error);
    }
    
}

export const getProduct = async () => {
    const response = await fetch(`https://panda-adg9.onrender.com`);
    const data = await response.json();
    return data;
}
  



export async function getBestProduct({order = ''}) {
    const query = `order=${order}`;
    const response = await fetch(`https://panda-adg9.onrender.com?${query}`);
    const body = await response.json();
    return  body;  
}

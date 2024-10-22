import axios from "axios";

const getProductsList = async (search="", option="favorite") => {
    try {
        const response = await axios.get(`https://panda-market-api.vercel.app/products?orderBy=${option}&keyword=${search}`);
        return response.data.list;
    } catch (error) {
        console.log(error);
    }
};

export default getProductsList;


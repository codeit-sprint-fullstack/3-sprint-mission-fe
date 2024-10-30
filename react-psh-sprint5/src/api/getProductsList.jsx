import axios from "axios";

const getProductsList = async (page=1, search="", option="favorite", pageSize=10) => {
    try {
        const response = await axios.get(`https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${option}&keyword=${search}`);
        return {
            products : response.data.list,
            totalCount : response.data.totalCount
        };
    } catch (error) {
        console.log(error);
    }
};

export default getProductsList;

// https://panda-market-api.vercel.app

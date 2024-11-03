import axios from "axios";
import { URL } from "./url.jsx";

const getProductsList = async (page=1, searchQuery="", option="favorite", pageSize=10) => {
    try {
        const response = await axios.get(`${URL}/products?page=${page}&pageSize=${pageSize}&orderBy=${option}&keyword=${searchQuery}`);
        return {
            products : response.data.list,
            totalCount : response.data.totalCount
        };
    } catch (error) {
        console.log(error);
    }
};

export default getProductsList;


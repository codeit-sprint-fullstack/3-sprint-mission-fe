import axios from "axios";
import { ExpressURL } from "./url";

const expressList = async (page = 1, searchQuery = "", option = "favorite", pageSize = 10) => {
    try {
        const response = await axios.get(`${ExpressURL}/items?page=${page}&pageSize=${pageSize}&orderBy=${option}&keyword=${searchQuery}`);
        return {
            products: response.data.list,
            totalCount: response.data.totalCount
        };
    } catch (error) {
        console.log(error);
        return { products: [], totalCount: 0 };
    }
};

export default expressList;


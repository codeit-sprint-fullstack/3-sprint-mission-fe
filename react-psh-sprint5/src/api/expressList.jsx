import axios from "axios";

const expressList = async (page = 1, search = "", option = "favorite", pageSize = 10) => {
    try {
        const response = await axios.get(`http://localhost:8000/items?page=${page}&pageSize=${pageSize}&orderBy=${option}&keyword=${search}`);
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


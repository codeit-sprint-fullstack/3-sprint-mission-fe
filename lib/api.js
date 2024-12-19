import instance from "./axios";

export const getPost = async () => {
    try {
        const response = await instance.get(`/article/articleList`);
        return response.data;
    } catch (err) {
        console.error(err);
    }
};
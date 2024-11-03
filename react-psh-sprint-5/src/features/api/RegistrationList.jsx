import axios from "axios";
import { ExpressURL } from "./url";
const RegistrationList = async (productName, productIntro, productPrice, productTag) => {
    try {
        const response = await axios.post(`${ExpressURL}/registration`, {
            name: productName,
            description: productIntro,
            price: productPrice,
            tags: productTag,
        });
        return response;
    } catch (error) {
        console.error("등록 실패:", error);
    }
};

export default RegistrationList;


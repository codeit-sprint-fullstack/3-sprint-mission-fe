import axios from "axios";

const RegistrationList = async (productName, productIntro, productPrice, productTag) => {
    try {
        const response = await axios.post(`http://localhost:8000/registration`, {
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


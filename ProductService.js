async function getProductList(page, pageSize, keyword) {
    try {
        const response = await fetch(`https://sprint-mission-api.vercel.app/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`);
        if (!response.ok) {
            throw new Error(`오류 발생: 상태 코드 ${response.status}`);
        }
        const data = await response.json();
        console.log('게시물 목록:', data);
        return data;

    } catch (error) {
        console.error('에러:', error);
    }
}
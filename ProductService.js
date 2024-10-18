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

async function getProduct(productName) {
    try {
       const response = await fetch(`https://sprint-mission-api.vercel.app/products/${productName}`);
       if (!response.ok) {
           throw new Error(`오류 발생: 상태 코드 ${response.status}`);
       }
       const data = await response.json();
       console.log('특정 게시물:', data);
       return data;
   } catch (error) {
       console.error('에러:', error);
   }
}

async function createProduct(createmch) {
    try {
        const response = await fetch('https://sprint-mission-api.vercel.app/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(createmch)
        });
        if (!response.ok) {
            throw new Error(`오류 발생: 상태 코드 ${response.status}`);
        }
        const data = await response.json();
        console.log('생성된 게시물:', data);
        return data;
    } catch (error) {
        console.error('에러:', error);
    }
}

async function patchProduct(productName, updateProduct) {
    try {
        const response = await fetch(`https://sprint-mission-api.vercel.app/products/${productName}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updateProduct)
        });
        if (!response.ok) {
            throw new Error(`오류 발생: 상태 코드 ${response.status}`);
        }
        const data = await response.json();
        console.log('수정된 게시물:', data);
        return data;
    } catch (error) {
        console.error('에러:', error);
    }
}

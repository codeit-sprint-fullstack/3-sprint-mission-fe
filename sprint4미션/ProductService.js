export async function getProductList(page, pageSize, keyword) {
    try {
        const response = await fetch(`https://sprint-mission-api.vercel.app/products/?page=${page}&pageSize=${pageSize}&keyword=${keyword}`);
        if (!response.ok) {
            const message = await response.text();
            throw new Error(message);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        throw new err;
    }
}

export async function getProduct(id) {
    try {
        const response = await fetch(`https://sprint-mission-api.vercel.app/products/${id}`);

        if (!response.ok) {
            const message = await response.text();
            return message;
        }
        const data = await response.json();
        return data;
    } catch (err) {
        throw new err;
    }
}

export async function createProduct(params) {
    try {
        const response = await fetch(`https://sprint-mission-api.vercel.app/products/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            const message = await response.text();
            return message;
        }
        const data = await response.json();
        return data;
    } catch (err) {
        throw new err;
    }
}

export async function patchProduct(id, params) {
    try {
        const response = await fetch(`https://sprint-mission-api.vercel.app/products/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(params),
        });

        if (!response.ok) {
            const message = await response.text();
            return message;
        }
        const data = await response.json();
        return data;
    } catch (err) {
        throw new err;
    }
}

export async function deleteProduct(id) {
    const deletemessage = `${id}번 상품이 삭제되었습니다.`
    try {
        const response = await fetch(`https://sprint-mission-api.vercel.app/products/${id}`, {
            method: "DELETE",
        });

        if (!response.ok) {
            const message = await response.text();
            return message;
        }
        return deletemessage;
    } catch (err) {
        throw new err;
    }
}

// import { responseInterceptor, handleError } from "../common/common.js";
import { apiUrl } from "../common/constant.js";



async function getProductList(page, pageSize, keyword){
    try {
        
        const requestBody = {
            page : page,
            pageSize : pageSize,
            keyword : keyword
        }
        
        const response = await fetch(`${apiUrl}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`)
        const data = await response.json()
              
        if(response.status === 200 || response.status === 201 || response.status === 204) {
            console.log('성공')
        }
        return {
            isSuccess : true,
            status : response.status,
            data : data
        }
    } catch(err) {
        console.log('이게 에러임', err)
        return "err catch"
    }
}

async function getProduct(id){
    try{
        const response = await fetch(`${apiUrl}/products/${id}`)
    
        const data = await response.json()
        return {
            isSuccess : true,
            status : response.status,
            data : data
        }
    } catch(err) {
        console.log('이게 에러임', err)
        return "err catch"
    }
}

async function createProduct(name, description, price, manufacturer, tags, images){
    try{
        const requestBody = {
            name : name,
            description : description,
            price : price,
            manufacturer : manufacturer,
            tags: tags,
            images: images
        }
    
        const response = await fetch(`${apiUrl}/products`, {
            method : 'POST',
            body : JSON.stringify(requestBody),
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        
        const data = await response.json()
        return {
            isSuccess : true,
            status : response.status,
            data : data
        }
    } catch(err) {
        console.log('이게 에러임', err)
        return "err catch"
    }
}

async function patchProduct(id, name, description, price, tags, images){
    try{
        const requestBody = {
            "name": name,
            "description": description,
            "price": price,
            "tags": tags,
            "images": images
          }
    
        const response = await fetch(`${apiUrl}/products/${id}`,{
            method : 'PATCH',
            body : JSON.stringify(requestBody),
            headers : {
                'Content-Type' : 'application/json',
            }
        })
        const data = await response.json()
        return {
            isSuccess : true,
            status : response.status,
            data : data
        }
    } catch(err) {
        console.log('이게 에러임', err)
        return "err catch"
    }
}

async function deleteProduct(id){
    const response = await fetch(`${apiUrl}/products/${id}`, {
        method : 'DELETE',
        headers : {
            'Content-Type' : 'application/json',
        }
    })
    if (response.status === 204) {
        return {
            isSuccess : true,
            status : response.status,
            data : null
        }
    } else {
        return {
            isSuccess : false,
            status : response.status,
            data : null
        }
    }
}

export const ProductService = {
    getProductList,
    getProduct,
    createProduct,
    patchProduct,
    deleteProduct
}
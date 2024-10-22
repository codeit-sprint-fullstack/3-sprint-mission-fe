export function responseInterceptor (response) {
    if(response.status === 200 || response.status === 201 || response.status === 204) {
        console.log('성공')
        return response.json().then((res) => ({ isSuccess : true, status : response.status, data:res }));
    } else {
        console.log('실패')
        return response.json().then((res) => ({ isSuccess : false, status : response.status, data:res }));
    }

    // return response.json().then((res) => ({ isSuccess : 
    //     response.status === 200 || response.status === 201 || response.status === 204
    //     , status : response.status, data:res }));
}

export function handleError (error) {
    console.log(error)
    throw errors
}


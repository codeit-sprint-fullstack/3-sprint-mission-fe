import instance from './instance';
// const url = "/products";
// export async function productsGet(
//   page = 1,
//   pageSize = 10,
//   orderBy = "recet",
//   keyword
// ) {
//   try {
//     let path = `${url}?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
//     if (!!keyword) path += `&keyword=${keyword}`;
//     const response = await instance.get(path);
//     return await response.data;
//   } catch (error) {
//     console.error(error);
//   }
// }
const url = '/product';

export async function productsGet({
  page = 1,
  pageSize = 10,
  orderBy = 'recent',
  keyword = '',
}: {
  page?: number;
  pageSize?: number;
  orderBy?: 'recent' | 'favorte';
  keyword?: '';
}) {
  try {
    let path = `${url}?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
    if (!!keyword) path += `&keyword=${keyword}`;
    const response = await instance.get(path);
    return await response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function productCreate(body) {
  try {
    const reponse = await instance.post(`${url}/create`, body);
    return await reponse.data;
  } catch (error) {
    console.error(error);
  }
}
export async function productEdit(body) {
  try {
    const reponse = await instance.patch(`${url}/edit`, body);
    return await reponse.data;
  } catch (error) {
    console.error(error);
  }
}
export async function productDelete(id) {
  try {
    const reponse = await instance.delete(`${url}/delete/${id}`);
    return await reponse.data;
  } catch (error) {
    console.error(error);
  }
}

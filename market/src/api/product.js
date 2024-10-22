import instance from "./instance";
const url = "/products";
export async function productsGet(
  page = 1,
  pageSize = 10,
  orderBy = "recet",
  keyword
) {
  try {
    let path = `${url}?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
    if (keyword) path += `&keyword=${keyword}`;
    const response = await instance.get(path);
    // console.log(await response.data);
    return await response.data;
  } catch (error) {
    console.error(error);
  }
}

import instance from "@/lib/axios";
import axios from "axios";

export async function FreeboardGet({ orderBy = "latest" }) {
  try {
    const response = await instance.get(
      `/api/freeboard?orderBy=${orderBy}&id=123`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function FreeboardCreate(body) {
  try {
    const response = await instance.post(`/api/freeboard`, body);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function FreeboardItem(id) {
  try {
    const response = await instance.get(`/api/freeboard/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export async function commentCreate(body) {
  try {
    const response = await instance.post(`/api/comment`, body);
    return response;
  } catch (error) {
    console.log(error);
  }
}

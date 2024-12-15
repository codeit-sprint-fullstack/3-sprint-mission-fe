import instance from './instance';

interface GetBoard {
  pageSize: number;
  orderBy: string;
  keyword: string;
}
export interface ReturnData {
  data: any | any[];
  status: number;
}
export async function boardGetData({
  pageSize = 6,
  orderBy = 'recent',
  keyword = '',
}: GetBoard) {
  try {
    let uri = `/api/board?pageSize=${pageSize}&orderBy=${orderBy}`;
    if (keyword) uri += `&keyword=${keyword}`;
    const response = await instance.get(uri);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (err) {
    console.error(err);
  }
}

export interface CreateBoard {
  title: string;
  content: string;
  images?: string[];
  userUuid: string;
}
export async function boardCreateData(body: CreateBoard) {
  try {
    const uri = `/api/board/create`;
    const response = await instance.post(uri, body);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (err) {
    console.error(err);
  }
}

export interface BoardItem {
  number?: string | number | undefined;
  body?: CreateBoard;
}
export async function boardGetItem({ number }: BoardItem) {
  try {
    const response = await instance.get(`/api/board/${number}`);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (err) {
    console.error(err);
  }
}

export async function boardPatchItem({ number, body }: BoardItem) {
  try {
    const response = await instance.patch(`/api/board/${number}`, body);
    return {
      data: response.data,
      status: response.status,
    };
  } catch (err) {
    console.error(err);
  }
}

export async function boardDeleteItem({ number }: BoardItem) {
  try {
    const response = await instance.delete(`/api/board/${number}`);
    return {
      status: response.status,
    };
  } catch (err) {
    console.error(err);
  }
}

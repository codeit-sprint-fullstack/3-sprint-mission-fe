import instance from './instance';

type Register = {
  email: string;
  name: string;
  password: string;
} | null;
export async function RegisterApi(body: Register): Promise<any | null> {
  if (!body) {
    return null;
  }
  try {
    const response = await instance.post('/register', body);
    return await response.data;
  } catch (err) {
    console.error(err);
  }
}

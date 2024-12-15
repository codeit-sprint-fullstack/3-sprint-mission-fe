import instance from "./instance";

export async function boardCreate(body) {
  try {
    const reponse = await instance.posh(body);
    return await reponse.data;
  } catch (err) {
    console.error(err);
  }
}

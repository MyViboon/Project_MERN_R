import axios from "axios";
import { appCheck, getToken } from "../firebase";

const url = process.env.REACT_APP_API;

const getGenerateToken = async () => {
  try {
    const token = await getToken(appCheck);
    return token;
  } catch (err) {
    console.log(err);
    return null;
  }
};

export const create = async (data) => await axios.post(`${url}/product/`, data);

export const getData = async () => {
  const pu = await getGenerateToken();
  console.log(pu);
  return await axios.get(`${url}/product/`, {
    headers: {
      "X-Firebase-Appcheck": pu.token,
    },
  });
};

export const read = async (id) => {
  return await axios.get(`${url}/product/${id}`);
};

export const update = async (id, data) => {
  return await axios.put(`${url}/product/${id}`, data);
};

export const remove = async (id) => await axios.delete(`${url}/product/${id}`);

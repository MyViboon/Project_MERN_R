import axios from "axios";
const url = process.env.REACT_APP_API;

export const create = async (data) => await axios.post(`${url}/product/`, data);

export const getData = async () => {
  return await axios.get(`${url}/product/`);
};

export const read = async (id) => {
  return await axios.get(`${url}/product/${id}`);
};

export const update = async (id, data) => {
  return await axios.put(`${url}/product/${id}`, data);
};

export const remove = async (id) => await axios.delete(`${url}/product/${id}`);

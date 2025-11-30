import axios from "axios";

//const API_URL = "http://localhost:5000/api/tables";

const API_URL_TABLE = import.meta.env.VITE_API_URL;

console.log("test1:",API_URL_TABLE);//test1: https://resto-backend-nine.vercel.app

const API_URL= `${API_URL_TABLE}/api/tables`;

console.log("test1:",API_URL);
export const getTables = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const lockTable = async (id) => {
  const res = await axios.put(`${API_URL}/lock/${id}`);
  return res.data;
};

export const unlockTable = async (id) => {
  const res = await axios.put(`${API_URL}/unlock/${id}`);
  return res.data;
};

export const updateTableStatus = async (tableNumber, status) => {
  const res = await axios.put(`${API_URL}/${tableNumber}/status`, { status });
  return res.data;
};
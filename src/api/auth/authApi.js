import api from "./axiosConfig";


console.log("API response:",api );

export const loginUser = async (data) => {
  try {
    const res = await api.post("/api/auth/login", data);
    console.log("API response:", res);
    return res.data;
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
};

export const registerUser = async (data) => {
  try {
    const res = await api.post("/api/auth/register", data);
    return res.data;
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
};

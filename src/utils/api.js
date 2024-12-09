import axios from "axios";

const api = axios.create({
  baseURL: "https://wardrobe-backend-284727859074.asia-south1.run.app",
  headers: {
    "Content-Type": "application/json",
  },
});

export const registerUser = async ({ username, email, password }) => {
  const res = await api.post("/register", {
    username,
    email,
    password,
  });

  return res.data;
};

export default api;

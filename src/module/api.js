import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export const getModunsApi = () => {
  return api.get("/modules");
};

export const createModunApi = (modun) => {
  return api.post("/module", modun);
};

export const updateModunApi = (id, modun) => {
  return api.put("/module/" + id, modun);
};

export const deleteModunApi = (id) => {
  return api.delete("/module/" + id);
};

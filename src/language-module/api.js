import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getLanguagesApi = () => {
  return api.get("/languages");
};

export const createLanguageApi = (language) => {
  return api.post("/language", language);
};

export const updateLanguageApi = (id, language) => {
  return api.put("/language/" + id, language);
};

export const deleteLanguageApi = (id) => {
  return api.delete("/language/" + id);
};

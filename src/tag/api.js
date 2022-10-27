import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000",
});

export const getTagsApi = () => {
  return api.get("/tags");
};

export const createTagApi = (tag) => {
  return api.post("/tag", tag);
};

export const updateTagApi = (id, tag) => {
  return api.put("/tag/" + id, tag);
};

export const deleteTagApi = (id) => {
  return api.delete("/tag/" + id);
};

import { createModunApi, deleteModunApi, getModunsApi, updateModunApi } from "./api";
import { addModunSuccess, deleteModunSuccess, getModunSuccess, updateModunSuccess } from "./slice";

export const getModuns = async (dispatch) => {
  try {
    const modunResult = await getModunsApi();
    dispatch(getModunSuccess(modunResult.data.data));
  } catch (error) {}
};

export const addModun = async (dispatch, modun) => {
  try {
    const modunResult = await createModunApi(modun);
    dispatch(addModunSuccess(modunResult.data.data));
  } catch (error) {}
};

export const updateModun = async (dispatch, id, modun) => {
  try {
    const modunResult = await updateModunApi(id, modun);
    dispatch(updateModunSuccess(modunResult.data.data));
  } catch (error) {}
};

export const deleteModun = async (dispatch, id) => {
  try {
    const modunResult = await deleteModunApi(id);
    dispatch(deleteModunSuccess(modunResult.data.data));
  } catch (error) {}
};

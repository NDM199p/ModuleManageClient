import { createTagApi, deleteTagApi, getTagsApi, updateTagApi } from "./api";
import { addTagSuccess, deleteTagSuccess, getTagSuccess, updateTagSuccess } from "./slice";

export const getTags = async (dispatch) => {
  try {
    const tagResult = await getTagsApi();
    dispatch(getTagSuccess(tagResult.data.data));
  } catch (error) {}
};

export const addTag = async (dispatch, tag) => {
  try {
    const tagResult = await createTagApi(tag);
    dispatch(addTagSuccess(tagResult.data.data));
  } catch (error) {}
};

export const updateTag = async (dispatch, id, tag) => {
  try {
    const tagResult = await updateTagApi(id, tag);
    dispatch(updateTagSuccess(tagResult.data.data));
  } catch (error) {}
};

export const deleteTag = async (dispatch, id) => {
  try {
    const tagResult = await deleteTagApi(id);
    dispatch(deleteTagSuccess(tagResult.data.data));
  } catch (error) {}
};

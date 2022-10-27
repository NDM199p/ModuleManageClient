import { createLanguageApi, deleteLanguageApi, getLanguagesApi, updateLanguageApi } from "./api";
import {
  addLanguageSuccess,
  deleteLanguageSuccess,
  getLanguageSuccess,
  updateLanguageSuccess,
} from "./slice";

export const getLanguages = async (dispatch) => {
  try {
    const languageResult = await getLanguagesApi();
    dispatch(getLanguageSuccess(languageResult.data.data));
  } catch (error) {}
};

export const addLanguage = async (dispatch, language) => {
  try {
    const languageResult = await createLanguageApi(language);
    dispatch(addLanguageSuccess(languageResult.data.data));
  } catch (error) {}
};

export const updateLanguage = async (dispatch, id, language) => {
  try {
    const languageResult = await updateLanguageApi(id, language);
    dispatch(updateLanguageSuccess(languageResult.data.data));
  } catch (error) {}
};

export const deleteLanguage = async (dispatch, id) => {
  try {
    const languageResult = await deleteLanguageApi(id);
    dispatch(deleteLanguageSuccess(languageResult.data.data));
  } catch (error) {}
};

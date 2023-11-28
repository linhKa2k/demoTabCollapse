import { fetchApi } from "../apiFactory";
import { BUSSINESS } from "../constants";
import { transformBusiness } from "./transform";

const { GET_DATA, DELETE_DATA, ADD_DATA, UPDATE_DATA, SEARCH_DATA, GET_USER,ADD_USER,UDATE_USER, DELETE_USER} =
  BUSSINESS;

export const businessApi = () => {
  const getApi = async (params) => {
    const res = await fetchApi(GET_DATA, params);
    return transformBusiness(res);
  };

  const deleteApi = async (data) => {
    return await fetchApi(DELETE_DATA, { id: data._id });
  };
  const addApi = async (data) => {
    const body = { userName: data.name, date: data.rules };
    return await fetchApi(ADD_DATA, {}, body);
  };
  const updateApi = async (data) => {
    const body = {
      date: data.date, 
      passWord: data.passWord,
      isActive: data.isActive,
    };
    return await fetchApi(UPDATE_DATA, { id: data.id }, body);
  };

  const searchApi = async (params) => { 
    const res = await fetchApi(SEARCH_DATA, params);
    return transformBusiness(res);
  };

  const getUserApi = async () => {
    const res = await fetchApi(GET_USER);
    return res;
  };
  const addUserApi = async (data) => {
    const body = { name: data.name, age: data.age };
    return await fetchApi(ADD_USER, {}, body);
  };
  const updateUserApi = async (data) => {
    const body = { name: data.name, age: data.age };
    return await fetchApi(UDATE_USER, {id: data.id}, body);
  };
  return {
    getApi,
    deleteApi,
    addApi,
    updateApi,
    searchApi,
    getUserApi,
    addUserApi,
    updateUserApi
  };
};

import request from "@src/utils/request";

const BASE_URL =
  "https://api.eazy-mock.teqn.asia/mock/4f66306b-d727-4efc-91e6-8a9479ab8245/home";

export const getStrength = () => {
  return request.get(`${BASE_URL}/strength`);
};

export const getIndustry = () => {
  return request.get(`${BASE_URL}/industry`);
};

export const getFeature = () => {
  return request.get(`${BASE_URL}/feature`);
};

export const getCustomer = () => {
  return request.get(`${BASE_URL}/customer`);
};

export const getQA = () => {
  return request.get(`${BASE_URL}/qa`);
};

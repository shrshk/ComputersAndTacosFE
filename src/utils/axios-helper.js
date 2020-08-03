// @flow
let axios: any;

function setAxios(value: any) {
  axios = value;
}

function getAxios() {
  return axios;
}

export const axiosHelper = {
  getAxios,
  setAxios,
};

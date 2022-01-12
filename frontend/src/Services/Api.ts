import axios from 'axios';

const BASE_URL_v1 = 'https://hub.mrkeno.app/api/v1';

export const api_url = axios.create({
  baseURL: BASE_URL_v1,
});

export const setToken = (token: string | undefined) => {
  const Token = token ? `Bearer ${token}` : undefined;
  api_url.defaults.headers.Authorization = Token;
};
export const setUserName = (userName: string | undefined) => {
  const UserName = userName ? `Bearer ${userName}` : undefined;
  api_url.defaults.headers.Authorization = UserName;
};

export default api_url;

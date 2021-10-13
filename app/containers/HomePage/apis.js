// request
import axios from 'axios';
// constants
import { API_URL } from 'utils/constants';
/**
 * @desc: get course list
 * @param: string $email, string $password
 * @return: string $id_token
 */

const camelToSnake = word => {
  let str = '';
  for (let i = 0; i < word.length; i += 1) {
    const w = word[i];
    str += w === w.toUpperCase() ? `_${w.toLowerCase()}` : w;
  }
  return str;
};

const getParam = params => {
  const keys = Object.keys(params);
  let paramStr = '?';
  keys.forEach(key => {
    const name = camelToSnake(key);
    const value = params[key];
    paramStr += `${paramStr.length > 1 ? '&' : ''}${name}=${value}`;
  });
  if (paramStr.length === 1) paramStr = '';
  return paramStr;
};

export function getInitApi({ projectId, modelId }) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  const params = getParam({ projectId, modelId });
  const options = {
    method: 'GET',
    headers,
    url: `${!API_URL ? process.env.API_URL : API_URL}/init/${params}`,
  };
  return new Promise((resolve, reject) => {
    axios(options)
      .then(response => response.data)
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

export function postApi({ projectId, modelId }) {
  const headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };
  let params = '?';
  if (projectId)
    params += `${params.length > 1 ? '&' : ''}project_id=${projectId}`;
  if (modelId) params += `${params.length > 1 ? '&' : ''}model_id=${modelId}`;
  if (params.length === 1) params = '';
  const options = {
    method: 'GET',
    headers,
    url: `${!API_URL ? process.env.API_URL : API_URL}/init/${params}`,
  };
  return new Promise((resolve, reject) => {
    axios(options)
      .then(response => response.data)
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

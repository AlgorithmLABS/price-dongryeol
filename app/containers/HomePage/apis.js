// request
import axios from 'axios';
// constants
import { API_URL } from 'utils/constants';
/**
 * @desc: get course list
 * @param: string $email, string $password
 * @return: string $id_token
 */
export function getInitApi({ projectId, modelId }) {
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

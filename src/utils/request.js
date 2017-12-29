import fetch from 'dva/fetch';

require('es6-promise').polyfill();
require('isomorphic-fetch');
import DomainPort from '../utils/DomainPort';

function parseJSON(response) {
  // console.log(response)
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else if (response.status === 500){
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function parseErrorMessage({data}) {
  const {status, message} = data;
  if (status === 'error') {
    throw new Error(message);
  }
  return {data};
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  return fetch(DomainPort + url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => {
      // console.log(data)
      return {data}
    })
    // .then(parseErrorMessage)ls
    .catch(err => ({err}));
}

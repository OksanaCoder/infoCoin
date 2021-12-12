import axios from 'axios';
import { setAxiosHeaders } from '../../../helpers/http/httpHelper'

// const baseURL = 'http://109.87.202.140';
// const baseURL = 'https://dev-api.infocoin.online'
const baseURL = 'https://dev-api.infocoin.online'

export const loginAPI = ({ password, email }) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.post(
        `${baseURL}/auth/sign-in`,
        {
          email,
          password,
        },
        {
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
        },
      );
      resolve(response);
      setAxiosHeaders(response.data.token)
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      reject(error)
    }
  });
};

export const signUpAPI = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.post(
        `${baseURL}/auth/register`, data,
        { headers: new Headers({ 'Content-Type': 'application/json' }) },
      );
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};

export const activateUser = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.post(
        `${baseURL}/auth/sign-up`, data,
        { headers: new Headers({ 'Content-Type': 'application/json' }) },
      );
      resolve(response);
    } catch (err) {
      reject(err);
    }
  });
};


export const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(
        `${baseURL}/api/user`,
        {},
        { headers: new Headers({ 'Content-Type': 'application/json' }) }
      )
      resolve(response)
      localStorage.setItem('user', JSON.stringify(response.data))
    } catch (err) {
      reject(err)
    }
  })
}
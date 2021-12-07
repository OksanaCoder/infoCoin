import axios from 'axios';

// const baseURL = 'http://109.87.202.140';
// const baseURL = 'https://dev-api.infocoin.online'
const baseURL = 'https://dev-api.infocoin.online'
export const loginAPI = ({ password, email }) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.post(
        `${baseURL}/api/sign-in`,
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
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.config.data);
      localStorage.setItem('name', response.data.name);
    } catch (err) {
      console.log(err);
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
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', response.config.data);
    } catch (err) {
      reject(err);
    }
  });
};


export const getUsers = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(
        `${baseURL}/api/user`,
        {},
        { headers: new Headers({ 'Content-Type': 'application/json' }) }
      )
      resolve(response)
    } catch (err) {
      reject(err)
    }
  })
}
import axios from 'axios';

const baseURL = 'http://109.87.202.140';

export const getVideo = id => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(`${baseURL}/ads/${id}.mp4`, {
        headers: new Headers({ 'Content-Type': 'application/json' }),
      });
      console.log(`video response`, response);
      resolve(response);
    } catch (err) {
      console.log(`video error`, err);
      reject(err);
    }
  });
};

import axios from 'axios'

export function setAxiosHeaders(token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    axios.defaults.headers.post['Content-Type'] = 'application/json';
}
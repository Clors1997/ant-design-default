import axios from 'axios'
// create an axios instance
const service = axios.create({
  baseURL: process.env.API_HOST, // url = base url + request url
  withCredentials: true,
  timeout: 16000,
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})
service.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)
service.interceptors.response.use(
  res => {
    return res.data
  },
  error => {
    console.log(error)
  }
)

export default service

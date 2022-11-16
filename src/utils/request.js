import axios from 'axios'

const _axios = axios.create({
  baseURL: process.env.VUE_APP_URL// 'http://119.91.150.211:3000/api'
})

_axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

_axios.interceptors.response.use(
  config => {
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

export default _axios

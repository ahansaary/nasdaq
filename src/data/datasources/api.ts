import axios from 'axios'

const apiBaseUrl = process.env.REACT_APP_API_BASE_URL as string
const polygonKey = process.env.REACT_APP_POLYGON_API_KEY as string

const Api = axios.create({
  baseURL: apiBaseUrl
})

Api.interceptors.request.use(config => {
  config.headers!['Authorization'] = `Bearer ${polygonKey}`

  return config
})

export default Api

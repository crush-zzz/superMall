import axios from "axios";

export function req(config) {
  const instance = axios.create({
    baseURL:'',
    timeout:''
  })
  instance.interceptors.request.use( config => {
    return config
  })
  instance.interceptors.response.use(res => {
    return res
  })
  return instance(config)
}

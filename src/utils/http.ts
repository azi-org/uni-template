import axios, { type AxiosError, type AxiosResponse, type AxiosRequestConfig } from 'axios'
import qs from 'qs'
import { storage } from './storage'

const TOKEN_KEY = 'x-token'

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

const baseURL = ''

export const fetch = axios.create({
  withCredentials: true,
  baseURL,
  timeout: 5000,
  timeoutErrorMessage: '请求超时',
})

let jump_count = 0

fetch.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    Object.assign(config.headers!, {
      Authorization: storage.get(TOKEN_KEY),
    })

    config.data = qs.stringify(config.data)

    return config
  },
  (err: AxiosError) => Promise.reject(err),
)

fetch.interceptors.response.use(
  (res: AxiosResponse) => {
    if (res.headers.Authorization) {
      storage.set(TOKEN_KEY, res.headers.Authorization)
    }
    return Promise.resolve(res.data)
  },
  (err: AxiosError) => {
    if (err.response?.status === 401) {
      console.log('authrozation exception:', err)
      if (jump_count === 0) {
        // 登录页
        ++jump_count
        setTimeout(() => {
          jump_count = 0
        }, 2000)
      }
    }
    return Promise.reject(err)
  },
)

fetch.defaults.adapter = function (config: any) {
  return new Promise((resolve, reject) => {
    const settle = require('axios/lib/core/settle')
    const buildURL = require('axios/lib/helpers/buildURL')

    uni.request({
      method: config.method!.toUpperCase(),
      url: config.baseURL + buildURL(config.url, config.params, config.paramsSerializer),
      header: config.headers,
      data: config.data,
      dataType: config.dataType,
      responseType: config.responseType,
      sslVerify: config.sslVerify,
      complete: function complete(response: any) {
        response = {
          data: response.data,
          status: response.status,
          errMsg: response.errMsg,
          headers: response.header,
          config: config,
        }
        settle(resolve, reject, response)
      },
    })
  })
}

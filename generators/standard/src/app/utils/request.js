import qs from 'qs'
import vue from 'vue'

const _request = (url, options = {}) => {
  const {
    method = 'GET',
    loading = true,
    headers = {},
    showError = true,
    ...others
  } = options

  if (loading) {
    vue.$loading.show()
  }

  return fetch(url, {
    method,
    headers,
    credentials: 'include',
    ...others
  })
    .then(response => {
      loading && vue.$loading.hide()
      const status = response.status

      if (status !== 200 || status !== 204) {
        return response.json()
      }

      return Promise.reject({
        errMsg: `请求出错啦（${status}）`,
        errCode: status,
        status
      })
    })
    .then(data => {
      // if (data.status !== 'success') {
      //   return Promise.reject(data)
      // }

      return data
    })
    ['catch'](error => {
      let msg = error.errMsg || '服务器吃撑了'

      loading && vue.$loading.hide()
      if (showError) {
        vue.$toast(msg)
      }

      return Promise.reject(error)
    })
}

const post = (url, data, { headers = {}, json = true, ...options } = {}) => {
  return _request(url, {
    method: 'POST',
    headers: {
      ...headers,
      'content-type': json
        ? 'application/json'
        : 'application/x-www-form-urlencoded'
    },
    body: json ? JSON.stringify(data) : qs.stringify(data),
    ...options
  })
}

const get = (url, params, { headers = {}, ...options } = {}) => {
  const _url = params ? `${url}?${qs.stringify(params)}` : url

  return _request(_url, {
    method: 'GET',
    headers,
    ...options
  })
}

export { post, get, _request as call }

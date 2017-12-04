import axios from 'axios'

export function fetchApi({
  method = 'POST',
  url = '',
  data = {},
  params = {},
}) {
  return axios.request({
    method,
    url,
    data,
    params,
  }).then((res) => JSON.stringify(res.data))
}

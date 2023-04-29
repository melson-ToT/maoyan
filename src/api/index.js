import axios from 'axios'
export function getHotList() {
  return axios({
    url: '/api/mmdb/movie/v3/list/hot.json',
    method: 'get',
    params: {
      ct: '广州',
      ci: 20,
      channelId: 4
    }
  })
}

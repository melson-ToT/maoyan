import axios from 'axios'
export function getHotList() {
  return axios({
    url: '/api/mmdb/movie/v3/list/hot.json',
    method: 'get',
    params: {
      ct: '宣城',
      ci: 206,
      channelId: 4
    }
  })
}

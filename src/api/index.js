
import axios from 'axios'
export function getHotList(){
    return axios({
      url:'/api/mmdb/movie/v3/list/hot.json',
      method: 'get',
      params:{
        ct: '广州',
        ci: 20,
        channelId: 4
      }
    })
}
export function ContinueLoading(){
  return axios({
    url:'/ajax/moreComingList',
    method: 'get',
    params:{
          optimus_risk_level: 71,
          optimus_code: 10,
    }
  })
}



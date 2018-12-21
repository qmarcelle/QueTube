import axios from 'axios'

const KEY = 'AIzaSyDJ3I0msRhdSaMyBBNs3IlRTYhLMo2242c'

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
})

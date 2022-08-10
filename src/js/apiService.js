

import axios from 'axios'
export default apiService 

axios.defaults.baseURL = 'https://pixabay.com/api/'
const API_KEY = '29185882-2e6657626f951957c100977da'

async function apiService(query, page, perPage) {
 // try {}
    const response = await axios.get(
      `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
    )
    return response
  }
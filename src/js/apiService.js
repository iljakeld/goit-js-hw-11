

import axios from 'axios'
export default apiService 

axios.defaults.baseURL = 'https://pixabay.com/api/'
const API_KEY = '27676465-10935f70b5ef43945c3ec7b05'

async function apiService(query, page, perPage) {
 // try {}
    const response = await axios.get(
      `?key=${API_KEY}&q=${query}&image_type=photo&orientation=horizontal&safesearch=true&page=${page}&per_page=${perPage}`,
    )
    return response
  }